import { createContext, useCallback, useEffect, useRef } from "react";
import { ToolBar } from "./components/ToolBar";
import { createChart, generateCandlesData } from "@devexperts/dxcharts-lite";
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
import { Chart } from "@dx-private/dxchart5-modules";
import { ChartWithModules } from "@dx-private/dxchart5-react/dist/chart/components/canvas-chart-renderer/chart-with-modules";
import { CenterHoverDrawer } from "./plugins/CenterHoverDrawer";

export const AppContext = createContext<MyAppContextData | undefined>(
  undefined
);

function App() {
  let candleData = useRef(generateCandlesData());

  const chartReactAPI = useRef<ChartReactAPI>();

  const chartRef = useRef<Chart>();

  const onChartCreated = useCallback((chart: Chart) => {
    const hoverDrawer = new CenterHoverDrawer(chart);
    chart.drawingManager.addDrawerAfter(hoverDrawer, "center-hover-drawer", "DYNAMIC_OBJECTS");
    
    const tradeObjectDrawer = new TradeObjectDrawer(chart);
    chart.drawingManager.addDrawerAfter(tradeObjectDrawer, 'trade-object-drawer', "DYNAMIC_OBJECTS");
    
    // chart.drawingManager.addDrawer(tradeObjectDrawer, "trade-object-drawer");
  
    chartRef.current = chart;
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
  }, []);

  const onApiCreated = useCallback((api: ChartReactAPI) => {
    chartReactAPI.current = api;
    chartReactAPI.current.changePeriod({ duration: 1, durationType: "h" });
    chartReactAPI.current.internal.multiChartViewModel.setChartTypeSync(true);
    chartReactAPI.current.internal.multiChartViewModel.setChartType("area");

    chartReactAPI.current.onChartCreated(
      (chartId: string, chart: ChartWithModules) => {
        console.log({ chartId, chart });

        if (chartId == "0") {
          onChartCreated(chart);
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

  const contextValue: MyAppContextData = {
    chartReactApi: chartReactAPI,
    chartRef: chartRef,
  };

  return (
    <>
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
                  onApiCreated,
                  localization: {
                    studies: {},
                  },
                  initialChartReactSettings: {
                    legend: {
                      showOHLC: false,
                      showVolume: false,
                      showInstrument: false,
                      showPeriod: false,
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
                      enabled: false,
                    },
                  },
                }}
              />
            </div>
          </div>
          <RightPanel />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
