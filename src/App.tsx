import { createContext, useCallback, useEffect, useRef } from "react";
import { ToolBar } from "./components/ToolBar";
import {
  Chart,
  createChart,
  generateCandlesData,
} from "@devexperts/dxcharts-lite";
import { RightPanel } from "./components/RightPanel";
import mountainImage from "./assets/mountain.jpg";
import "./styles/app.css";
import { MyAppContextData } from "./lib/DataType";

import { ChartReactApp } from "@dx-private/dxchart5-react/dist/chart/chart-react-app";
import { ChartReactAPI } from "@dx-private/dxchart5-react/dist/chart/view-models/api/chart-react-api.view-model";
import { ChartAreaTheme } from "@devexperts/dxcharts-lite/dist/chart/chart.config";

export const AppContext = createContext<MyAppContextData | undefined>(
  undefined
);

function App() {
  let candleData = useRef(generateCandlesData());

  const chartReactAPI = useRef<ChartReactAPI>();
  const onApiCreated = useCallback((api: ChartReactAPI) => {
    chartReactAPI.current = api;
    chartReactAPI.current.changePeriod({ duration: 1, durationType: "h" });
    chartReactAPI.current.internal.multiChartViewModel.setChartTypeSync(true);
    chartReactAPI.current.internal.multiChartViewModel.setChartType("area");

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
    chatRef: chartReactAPI,
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
                        enabled: true,
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
    </>
  );
}

export default App;
