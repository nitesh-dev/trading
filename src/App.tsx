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


export const AppContext = createContext<MyAppContextData | undefined>(undefined);

function App() {
  let chartInstance = useRef<Chart>();
  let candleData = useRef(generateCandlesData());

  useEffect(() => {
    // if(!chartEle.current) return
    const item = document.querySelector("#chart-holder") as HTMLDivElement;

    const chart = createChart(item, {});
    chart.setChartType("area");
    chart.setColors({
      areaTheme: {
        lineColor: "#0099F7",
        startColor: "rgba(0, 152, 247, 0.08)",
        stopColor: "rgba(0, 152, 247, 0.08)",
      },
    });
    

    chart.setGridVertical(false);
    chart.setData({ candles: candleData.current });

    chartInstance.current = chart;

    // const timer = setInterval(addMoreCandle, 1000);
    // return () => clearInterval(timer);
  }, []);

  function addMoreCandle() {
    if (!chartInstance.current) return;
    const newData = generateCandlesData();
    candleData.current = [...candleData.current, ...newData];
    chartInstance.current.setData({ candles: candleData.current });

    console.log("timer call");
  }

  const contextValue: MyAppContextData = {
    chatRef: chartInstance,
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
            ></div>
          </div>
          <RightPanel />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
