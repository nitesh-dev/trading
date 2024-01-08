import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { ToolBar } from "./components/ToolBar";
// import { createChart, generateCandlesData } from "@devexperts/dxcharts-lite";
import { RightPanel } from "./components/RightPanel";
import mountainImage from "./assets/mountain.jpg";
import "./styles/app.css";
import { HoverDirection, MyAppContextData } from "./lib/DataType";

import {
  ChartAppDependencies,
  ChartReactApp,
} from "@dx-private/dxchart5-react/dist/chart/chart-react-app";
import { ChartReactAPI } from "@dx-private/dxchart5-react/dist/chart/view-models/api/chart-react-api.view-model";
import { ChartAreaTheme } from "@devexperts/dxcharts-lite/dist/chart/chart.config";
import { TradeObjectDrawer } from "./plugins/TradeObjectDrawer";
import { Chart, generateCandlesData } from "@dx-private/dxchart5-modules";
import { ChartWithModules } from "@dx-private/dxchart5-react/dist/chart/components/canvas-chart-renderer/chart-with-modules";
import { CenterHoverDrawer } from "./plugins/CenterHoverDrawer";
import { ToastProvider } from "./components/widgets/Toast";

export const AppContext = createContext<MyAppContextData | undefined>(
  undefined
);

import json1 from "./others/data1.json";
import json2 from "./others/data2.json";
import { io, Socket } from "socket.io-client";

import {
  ChartCandleData,
  ChartDataOptions,
  ChartDataProvider,
  ServiceData,
} from "@dx-private/dxchart5-react/dist/providers/chart-data-provider";
import { AggregationPeriod } from "@dx-private/dxchart5-react/dist/chart/model/aggregation.model";

async function genData(): Promise<ChartCandleData[]> {
  // const data = generateCandlesData({ quantity: 5 });

  const data = json1.map((item: any) => {
    return {
      hi: item.high,
      lo: item.low,
      open: item.open,
      close: item.close,
      timestamp: item.time * 1000,
      volume: 0,
      isVisible: true,
    };
  });

  const newData: ChartCandleData[] = data.map((item) => {
    return {
      close: item.close,
      high: item.hi,
      low: item.lo,
      open: item.open,
      time: item.timestamp,
      volume: item.volume,
    } as ChartCandleData;
  });
  console.log("gen data");
  return newData;
}

function App() {
  const chartReactAPI = useRef<ChartReactAPI>();
  const chartsRef = useRef<ChartWithModules[]>([]);
  const chartRef = useRef<Chart>();
  const socketRef = useRef<Socket>();
  const timeFrameIntervalSecRef = useRef<number>(10);
  const lastCandleTimestamp = useRef<number>(0);
  const [dataProvider, setDataProvider] = useState<ChartDataProvider>();

  const defaultData = useRef<ChartCandleData[]>([]);

  async function genData2() {
    return defaultData.current;
  }

  useEffect(() => {
    (async () => {
      defaultData.current = await genData();

      setDataProvider({
        requestHistoryData(
          symbol: string,
          aggregation: AggregationPeriod,
          options?: {
            fromTime?: number;
            toTime?: number;
          } & ChartDataOptions
        ): Promise<ChartCandleData[]> {
          return genData2();
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
      });
    })();
  }, []);

  const onChartCreated = useCallback((chart: Chart) => {
    const hoverDrawer = new CenterHoverDrawer(chart);
    chart.drawingManager.addDrawer(hoverDrawer, "center-hover-drawer");

    const tradeObjectDrawer = new TradeObjectDrawer(chart);
    chart.drawingManager.addDrawer(tradeObjectDrawer, "trade-object-drawer");
    // chart.drawingManager.addDrawer(tradeObjectDrawer, "trade-object-drawer");
    // {
      //   const candles = generateCandlesData({ quantity: 5 });
      //   chart.setData({candles})
      // }
    let isFirst = true;
    chartRef.current = chart;

    /*
    {
    "hi": 48.524512290841585,
    "lo": 47.86020168585476,
    "open": 48.46116436095697,
    "close": 48,
    "timestamp": 1704084300000,
    "volume": 0,
    "isVisible": true
}
    */

    // setTimeout(() => {

    // } , 1000)


    const socket = io("http://85.206.172.238:2088", {
      reconnectionDelayMax: 10000,
    });

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.emit("room", "BTCUSD");
    // socket.on(
    //   "notification",
    //   function (data: any) {

    //     return
    //     console.log(data);
    //     // const _candles = generateCandlesData({ quantity: 1 });
    //     const candle = {
    //       hi: data.High ,
    //       lo: data.Low ,
    //       open: data.Bid ,
    //       close: data.Bid ,
    //       timestamp: Date.now(),
    //       volume: 0,
    //       isVisible: true,
    //     };
    
    //     chart.data.addLastCandle(candle);
    //     console.log(chartsRef.current.length, "length");
    //     chart.redraw();
    //     chart.drawingManager.forceDraw();
    //     chart.scale.autoScale(true);
    //     chart.timeZoneModel.observeTimeZoneChanged();
    //   }
    // );
    
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
        console.log(data);
        // const _candles = generateCandlesData({ quantity: 1 });
        // const candle = {
        //   hi: data.Bid ,
        //   lo: data.Bid ,
        //   open: data.Bid ,
        //   close: data.Bid ,
        //   timestamp: Date.now(),
        //   volume: 0,
        //   isVisible: true,
        // };

        console.log(chart);
        const a = chart.chartBaseModel.mainDataPoints;

        var lastDataObject = a[a.length - 1];
        if (lastDataObject) {
          console.log(a[a.length - 1]);
          var previousDate = lastDataObject.timestamp;
          var high = lastDataObject.hi;
          var low = lastDataObject.lo;
          var open = lastDataObject.open;
          var m1 = 60; //Current durationType (s -1, m - 60, h - 3600, d - 86400)
          var m2 = 1; // Current Duration

          var nextChange = previousDate + m1 * m2 * 1000;
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

        // chart.data.addLastCandle(candle);
        // console.log(chartsRef.current.length, "length");
        // chart.redraw();
        // chart.drawingManager.forceDraw();
        // chart.scale.autoScale(true);
        // chart.timeZoneModel.observeTimeZoneChanged();
      }
    );

    // setInterval(() => {
    //   if (isFirst) {
    //     isFirst = false;
    //     const _candles = generateCandlesData({ quantity: 50 });
    //     //     chart.setData({ candles: _candles });

    //     // chart.data.setMainSeries({ candles: _candles });
    //     // chart.data.setSecondarySeries({ candles: _candles });

    //     console.log(_candles);
    //     chart.setData({candles: _candles})
    //   }
    //   const _candles = generateCandlesData({ quantity: 1 });
    //   const candle = _candles[0];
    //   candle.timestamp = new Date().getTime();
    //   console.log(candle)

    //   chart.redraw();
    //   chart.drawingManager.forceDraw();
    //   chart.timeZoneModel.observeTimeZoneChanged();
    //   chart.data.addLastCandle(candle);
    // }, 1000);

    // chart.data.setMainSeries({
    //   candles: generateCandlesData({ quantity: 5 }),
    // });
    // chartRef.current.setData();
    // setInterval(() => {
    //   const data = generateCandlesData({ quantity: 5 });
    //   const candle = data[0];
    //   candle.timestamp = Date.now();
    //   if (chartRef.current) {
    //     chartRef.current.data.addLastCandle(candle);
    //   }
    // }, 1000);


    // const _candles = json2.map((item: any) => {
    //   return {
    //     hi: item.high,
    //     lo: item.low,
    //     open: item.open,
    //     close: item.close,
    //     timestamp: item.time * 1000,
    //     volume: 0,
    //     isVisible: true,
    //   };
    // });

    // console.log(_candles);

    // chart.setData({ candles: _candles });
    // chart.data.setMainSeries({ candles: _candles });
  }, []);

  const onApiCreated = useCallback((api: ChartReactAPI) => {
    chartReactAPI.current = api;
    chartReactAPI.current.internal.multiChartViewModel.setChartTypeSync(true);
    // chartReactAPI.current.internal.multiChartViewModel.setChartType("area");

    // const a: TStudySettings[] = [{
    //   id: "sdfd",
    //   uuid: "sdfsd",
    //   title: "dfsdf",
    //   type: "dxStudy",
    //   parameters: [],
    //   lines: [],
    //   calculateFutureData: false,
    //   overlaying: false,
    //   categories: ""
    // }]
    // chartReactAPI.current.internal.multiChartViewModel.setStudiesSync(true)
    // chartReactAPI.current.internal.multiChartViewModel.setStudies(a)

    chartReactAPI.current.onChartCreated(
      (chartId: string, chart: ChartWithModules) => {
        console.log({ chartId, chart });

        if (chartId == "0") {
          onChartCreated(chart);
          chartsRef.current.push(chart);
        }
      }
    );

    // chartReactAPI.current
    chartReactAPI.current.setVolumesEnabled(false);
    const old = chartReactAPI.current.getSelectedChartInfo().chartSettings;

    // area chart
    old.chartCore.themes.dark.areaTheme.lineColor = "#0099F7";
    old.chartCore.themes.dark.areaTheme.startColor = "rgba(0, 152, 247, 0.08)";
    old.chartCore.themes.dark.areaTheme.stopColor = "rgba(0, 152, 247, 0.08)";

    // line chart
    old.chartCore.themes.dark.lineTheme.upColor = "#0099F7";

    // bar chart
    old.chartCore.themes.dark.barTheme.upColor = "#0099F7";

    // candle chart
    old.chartCore.themes.dark.candleTheme.upColor = "#0099F7";

    chartReactAPI.current.setChartSettings(old);
  }, []);

  // useEffect(() => {
  //   console.log("connecting to socket");
  //   const socket = io("http://85.206.172.238:2088", {
  //     reconnectionDelayMax: 10000,
  //   });

  //   socket.on("connect", () => {
  //     console.log("connected");
  //     socketRef.current = socket;
  //     socket.emit("room", "BTCUSD");
  //   });

  //   socket.on(
  //     "notification",
  //     function (data: {
  //       SymbolID: number;
  //       Symbol: string;
  //       Bid: number;
  //       Ask: number;
  //       High: number;
  //       Low: number;
  //       Close: number;
  //       Time: string;
  //     }) {
  //       // const _candles = generateCandlesData({ quantity: 1 });
  //       const candle = {
  //         hi: data.High / 100,
  //         lo: data.Low / 100,
  //         open: data.Bid / 100,
  //         close: data.Bid / 100,
  //         timestamp: new Date().getTime(),
  //         volume: 0,
  //         isVisible: true,
  //       };

  //       // if (chartRef.current) {
  //       //   if (
  //       //     candle.timestamp - lastCandleTimestamp.current >
  //       //     timeFrameIntervalSecRef.current * 1000
  //       //   ) {
  //       //     lastCandleTimestamp.current = candle.timestamp;
  //       //     chartRef.current.data.addLastCandle(candle);
  //       //     console.log("added");
  //       //   } else {
  //       //     candle.timestamp = lastCandleTimestamp.current;
  //       //     chartRef.current.data.updateLastCandle(candle);
  //       //     console.log("updated");
  //       //   }

  //       //   chartRef.current.redraw();
  //       //   chartRef.current.drawingManager.forceDraw();
  //       //   chartRef.current.scale.autoScale(true);
  //       //   chartRef.current.timeZoneModel.observeTimeZoneChanged();
  //       // }
  //     }
  //   );
  // }, []);

  const contextValue: MyAppContextData = {
    chartReactApi: chartReactAPI,
    chartRef: chartRef,
    socketRef: socketRef,
    setTimeInterval: changeTimeFrameInterval,
    setLastCandleTimestamp: setLastCandleTimestamp,
  };

  function setLastCandleTimestamp(timestamp: number) {
    console.log(timestamp, "timestamp");
  }

  function changeTimeFrameInterval(time: number) {
    timeFrameIntervalSecRef.current = time;
  }

  return (
    <>
      {/* <ToastProvider> */}
      <AppContext.Provider value={contextValue}>
        <div className="main-app">
          <ToolBar />
          <div className="chart-holder-parent">
            <img className="image-layer" src={mountainImage} />
            <div
              id="chart-holder"
              style={{ height: "100vh", width: "100%" }}
              className="chart-holder"
            >
              <ChartReactApp
                dependencies={{
                  chartDataProvider: dataProvider,
                  initialChartConfig: {
                    scale: {
                      auto: true,
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
                      showVolume: false,
                      showInstrument: true,
                      showPeriod: true,
                    },
                  },

                  chartReactConfig: {
                    drawings: {
                      sidebar: {
                        enabled: false,
                      },
                    },
                    toolbar: {
                      showButtonsTooltip: true,
                      enabled: true,
                    },
                  },
                }}
              />
            </div>
          </div>
          <RightPanel />
        </div>
      </AppContext.Provider>
      {/* </ToastProvider> */}
    </>
  );
}

export default App;
