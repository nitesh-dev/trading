import { useCallback, useEffect, useRef } from "react";
import { ToolBar } from "./components/ToolBar";
import {
  Chart,
  createChart,
  generateCandlesData,
} from "@devexperts/dxcharts-lite";
import { RightPanel } from "./components/RightPanel";

import mountainImage from "./assets/mountain.jpg";

import "./styles/app.css";
function App() {
  let chartInstance = useRef<Chart>();

  useEffect(() => {
    // if(!chartEle.current) return
    const item = document.querySelector("#chart-holder") as HTMLDivElement;
    const candles = generateCandlesData();

    const chart = createChart(item, {});
    chart.setChartType("area");
    chart.setColors({
      areaTheme: {
        lineColor: "#1c77c3",
        startColor: "rgba(255, 255, 255, 0.08)",
        stopColor: "rgba(255, 255, 255, 0.08)",
      },
    });
    chart.setData({ candles });

    chartInstance.current = chart;
  }, []);

  return (
    <>
      <div className="main-app">
        <ToolBar />
        <div className="chart-holder-parent">
          <img className="image-layer" src={mountainImage} />
          <div
            id="chart-holder"
            style={{ height: "100vh", width: "100%" }}
            className="chart-holder"
          ></div>
        </div>
        <RightPanel />
      </div>
    </>
  );
}

export default App;
