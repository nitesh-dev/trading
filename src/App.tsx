import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { ToolBar } from "./components/ToolBar";
// import { createChart, generateCandlesData } from "@devexperts/dxcharts-lite";
import { RightPanel } from "./components/RightPanel";
import mountainImage from "./assets/mountain.jpg";
import "./styles/app.css";
import {
  HoverDirection,
  MyAppContextData,
  ServerChartData,
} from "./lib/DataType";

import {
  ChartAppDependencies,
  ChartReactApp,
} from "@dx-private/dxchart5-react/dist/chart/chart-react-app";
import { ChartReactAPI } from "@dx-private/dxchart5-react/dist/chart/view-models/api/chart-react-api.view-model";
import { ChartAreaTheme } from "@devexperts/dxcharts-lite/dist/chart/chart.config";
import { TradeObjectDrawer } from "./plugins/TradeObjectDrawer";
import { Chart, generateCandlesData } from "@dx-private/dxchart5-modules";
import { ChartWithModules } from "@dx-private/dxchart5-react/dist/chart/components/canvas-chart-renderer/chart-with-modules";
import { fromRawStudiesSettings } from "@dx-private/dxchart5-react/dist/chart/model/studies.model";
import { CenterHoverDrawer } from "./plugins/CenterHoverDrawer";
import { ToastProvider } from "./components/widgets/Toast";

export const AppContext = createContext<MyAppContextData>({
  chartReactApi: undefined,
  chart: undefined,
  socket: undefined,
  chartWithDrawings: undefined,
  setTimeIntervalInSec: () => {},
  setSymbol: () => {},
  historyData: [],
  studiesProvider: undefined,
});

import { io, Socket } from "socket.io-client";

import {
  ChartCandleData,
  ChartDataOptions,
  ChartDataProvider,
  ServiceData,
} from "@dx-private/dxchart5-react/dist/providers/chart-data-provider";
import { AggregationPeriod } from "@dx-private/dxchart5-react/dist/chart/model/aggregation.model";
import { serverDataToChartCandleData } from "./lib/Utils";
import { cloneUnsafe } from "@devexperts/dxcharts-lite/dist/chart/utils/object.utils";
import { ChartWithDrawings } from "@dx-private/dxchart5-modules/dist/drawings/drawings.config";
import { attachDrawingsComponent } from "@dx-private/dxchart5-modules/dist/drawings";
import { DEFAULT_STUDIES_LIST } from "@dx-private/dxchart5-react/dist/config/studies-list";
import { DrawingType } from "@dx-private/dxchart5-modules/dist/drawings/model/drawing-types";
import {
  createDxStudiesProvider,
  DxStudiesProvider,
} from "@dx-private/dxchart5-react/dist/providers/studies/dx-studies-provider";
import { TStudySettings } from "@dx-private/dxchart5-react/dist/chart/model/studies.model";
import { Observable } from "rxjs";
import { loadChartHistory } from "./api";
import { TradeObjectMarkerDrawer } from "./plugins/TradeObjectMarkerDrawer";
import Loading from "./components/Loading";

function App() {
  const chartsRef = useRef<ChartWithModules[]>([]);
  const timeFrameIntervalSec = useRef<number>(60);
  const [dataProvider, setDataProvider] = useState<ChartDataProvider>();

  const appContextData = useRef<MyAppContextData>({
    chartReactApi: undefined,
    chart: undefined,
    socket: undefined,
    chartWithDrawings: undefined,
    historyData: serverDataToChartCandleData([]),
    setTimeIntervalInSec: changeTimeFrameInterval,
    setSymbol: changeSymbol,
    studiesProvider: undefined,
  });

  const selectedSymbol = useRef("BTCUSD");
  const [isDataLoading, setIsDataLoading] = useState(false);

  async function getHistoryData() {
    return appContextData.current.historyData;
  }

  useEffect(() => {
    (async () => {
      setDataProvider({
        requestHistoryData(
          symbol: string,
          aggregation: AggregationPeriod,
          options?: {
            fromTime?: number;
            toTime?: number;
          } & ChartDataOptions
        ): Promise<ChartCandleData[]> {
          return getHistoryData();
        },
        subscribeCandles(
          symbol: string,
          aggregation: AggregationPeriod,
          subscriptionId: string,
          subscribeCallback: (data: ChartCandleData[]) => void,
          options?: ChartDataOptions
        ): void {},
        unsubscribeCandles(subscriptionId: string): void {},
        subscribeServiceData(
          symbol: string,
          subscribeCallback: (data: ServiceData) => void
        ): void {},
        unsubscribeServiceData(symbol: string): void {}, // Add this line
      });
    })();

    saveDefaultAggregation();

    const initialStudies = Array<TStudySettings>();
    DEFAULT_STUDIES_LIST().forEach((item) => {
      initialStudies.push(fromRawStudiesSettings(item));
    });

    appContextData.current.studiesProvider =
      createDxStudiesProvider(initialStudies);

    setupSocket();
  }, []);

  function saveDefaultAggregation() {
    localStorage.setItem("aggregate", "m1");
  }

  function getAggregation() {
    let item = localStorage.getItem("aggregate");
    if (!item) item = "m1";
    const durationType = item[0].toLowerCase() as "s" | "m" | "h" | "d";
    const duration = parseInt(item.slice(1));

    return {
      durationType,
      duration,
    };
  }

  function setupSocket() {
    const socket = io("http://85.206.172.238:2088", {
      reconnectionDelayMax: 10000,
    });

    appContextData.current.socket = socket;

    socket.on("connect", () => {
      console.log("connected");
      loadHistoryData();
    });

    socket.emit("room", selectedSymbol.current);

    // return;
    socket.on(
      "notification",
      function (data: {
        SymbolID: number;
        Symbol: string;
        Bid: number;
        Ask: number;
        High: number;
        Low: number;
        Close: number;
        Time: string;
      }) {
        if (isDataLoading) {
          console.log("Socket data skipped");
          return;
        }

        const chart = appContextData.current.chart;
        if (!chart) return;

        const allCandles = chart.chartBaseModel.mainDataPoints;

        var lastDataObject = allCandles[allCandles.length - 1];
        if (lastDataObject) {
          var previousDate = lastDataObject.timestamp;
          var high = lastDataObject.hi;
          var low = lastDataObject.lo;
          var open = lastDataObject.open;
          var m1 = 60; //Current durationType (s -1, m - 60, h - 3600, d - 86400)
          var m2 = 1; // Current Duration

          var nextChange = previousDate + timeFrameIntervalSec.current * 1000;
          var ts = Math.round(new Date().getTime());

          if (ts >= nextChange) {
            const candleAdd = {
              hi: data.Bid,
              lo: data.Bid,
              open: data.Bid,
              close: data.Bid,
              timestamp: Date.now(),
              volume: 0,
              isVisible: true,
            };

            chart.data.addLastCandle(candleAdd);

            // sbSeries.data.push(dObj1);
            previousDate = candleAdd.timestamp;
          } else {
            const candleUpdate = {
              hi: data.Bid > high ? data.Bid : high,
              lo: data.Bid < low ? data.Bid : low,
              open: open,
              close: data.Bid,
              timestamp: previousDate,
              volume: 0,
              isVisible: true,
            };

            chart.data.updateLastCandle(candleUpdate);
          }
        }
      }
    );
  }

  const onChartCreated = useCallback((chart: Chart) => {
    appContextData.current.chartWithDrawings = attachDrawingsComponent(chart);

    const hoverDrawer = new CenterHoverDrawer(chart);
    chart.drawingManager.addDrawer(hoverDrawer, "center-hover-drawer");

    const tradeObjectDrawer = new TradeObjectDrawer(chart);
    chart.drawingManager.addDrawer(tradeObjectDrawer, "trade-object-drawer");
    appContextData.current.chart = chart;

    const tradeObjectMarkerDrawer = new TradeObjectMarkerDrawer(chart);
    chart.drawingManager.addDrawer(
      tradeObjectMarkerDrawer,
      "trade-object-marker-drawer"
    );
  }, []);

  const onApiCreated = useCallback((api: ChartReactAPI) => {
    appContextData.current.chartReactApi = api;
    api.internal.multiChartViewModel.setChartTypeSync(true);
    api.internal.multiChartViewModel.setStudiesSync(true)
    api.setTradingQuantityPrecision(10);

    api.onChartCreated((chartId: string, chart: ChartWithModules) => {
      console.log({ chartId, chart });

      if (chartId == "0") {
        onChartCreated(chart);
        chartsRef.current.push(chart);
      }
    });

    // api
    api.setVolumesEnabled(false);
    const old = api.getSelectedChartInfo().chartSettings;

    // area chart
    old.chartCore.themes.dark.areaTheme.lineColor = "#fff";
    old.chartCore.themes.dark.areaTheme.startColor = "rgba(255, 255, 255, 0.06)";
    old.chartCore.themes.dark.areaTheme.stopColor = "rgba(255, 255, 255, 0.06)";

    // line chart
    old.chartCore.themes.dark.lineTheme.upColor = "#0099F7";
    old.chartCore.themes.dark.lineTheme.upColor = "#0099F7";
    

    // bar chart
    old.chartCore.themes.dark.barTheme.upColor = "#0099F7";

    // candle chart
    old.chartCore.themes.dark.candleTheme.upColor = "#0099F7";
    old.chartCore.themes.dark.candleTheme.noneColor = "#0099F7";

    api.setChartSettings(old);
  }, []);

  async function loadHistoryData() {
    console.log("loading history data");
    setIsDataLoading(true);
    appContextData.current.historyData = [];
    appContextData.current.chartReactApi!!.changePeriod(getAggregation());

    // TODO: remove Math.round(timeFrameIntervalSec.current / 60) if api is fixed in seconds
    const response = await loadChartHistory(
      selectedSymbol.current,
      Math.round(timeFrameIntervalSec.current / 60)
    );

    setIsDataLoading(false);

    if (response.data) {
      console.table(response.data);
      appContextData.current.historyData = serverDataToChartCandleData(
        response.data
      );
      appContextData.current.chartReactApi!!.changePeriod(getAggregation());
    } else {
      alert("failed to load data");
    }

    // TODO: get data from api and call set the aggregation
    console.log(response);
  }
  function changeTimeFrameInterval(time: number) {
    console.log("interval changed");

    if (time != timeFrameIntervalSec.current) {
      timeFrameIntervalSec.current = time;
      loadHistoryData();
    }
  }

  function changeSymbol(symbol: string) {
    console.log("symbol changed");
    localStorage.setItem("symbol", symbol);

    if (symbol != selectedSymbol.current) {
      appContextData.current.socket?.emit("roomLeave", selectedSymbol.current);
      appContextData.current.socket?.emit("room", symbol);
      selectedSymbol.current = symbol;
      loadHistoryData();
    }
  }

  useEffect(() => {
    localStorage.setItem("symbol", selectedSymbol.current);
  }, []);

  return (
    <>
      <ToastProvider>
        <AppContext.Provider value={appContextData.current}>
          <div className="main-app">
            <div>
              <ToolBar />
              <div className="main-area">
                <div className="chart-holder-parent">
                  <img className="image-layer" src={mountainImage} />
                  <div id="chart-holder" className="chart-holder">
                    {/* @ts-ignore */}
                    <ChartReactApp
                      dependencies={{
                        dxStudiesProvider:
                          appContextData.current.studiesProvider,
                        chartDataProvider: dataProvider,
                        initialChartConfig: {
                          scale: {
                            auto: true,
                          },
                          components: {
                            yAxis: {
                              labels: {},
                            },
                          },
                        },

                        onApiCreated,
                        localization: {
                          studies: {},
                        },
                        initialInstrument: "BTCUSD",
                        initialAggregationPeriods: [
                          { duration: 30, durationType: "m" },
                          { duration: 1, durationType: "h" },
                        ],
                        initialAggregation: {
                          duration: 1,
                          durationType: "s",
                        },
                        initialChartReactSettings: {
                          legend: {
                            showOHLC: true,
                            showVolume: true,
                            showInstrument: false,
                            showPeriod: false,
                            mode: "pinned",
                          },
                        },
                        initialStudies: [],

                        chartReactConfig: {
                          drawings: {
                            sidebar: {
                              enabled: false,
                            },
                          },
                          toolbar: {
                            showButtonsTooltip: true,
                            enabled: false,
                          },
                          studies: {
                            addStudyButtonEnabled: true,
                          },
                          disableWorkers: true,
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <RightPanel />
          </div>
          <Loading isLoading={isDataLoading} />
        </AppContext.Provider>
      </ToastProvider>
    </>
  );
}

export default App;
