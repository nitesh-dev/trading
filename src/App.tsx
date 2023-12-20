import { useCallback, useEffect, useRef } from "react";
import { ToolBar } from "./components/ToolBar";
import {
  Chart,
  createChart,
  generateCandlesData,
} from "@devexperts/dxcharts-lite";
import { RightPanel } from "./components/RightPanel";


import "./styles/app.css"
function App() {
  let chartInstance = useRef<Chart>();

  useEffect(() => {
    // if(!chartEle.current) return
    const item = document.querySelector("#chart-holder") as HTMLDivElement;
    const candles = generateCandlesData();

    const chart = createChart(item, {})
    chart.setData({ candles });


    chartInstance.current = chart
  }, []);

  return (
    <>
      <div className="main-app">
        <ToolBar />
        <div id="chart-holder" style={{ height: "100vh", width: "100%" }} className="chart-holder"></div>
        <RightPanel/>
      </div>
    </>
  );
}

export default App;


{/* <ChartReactApp

          dependencies={{
            onApiCreated,
            initialChartReactSettings: {
              legend:{
                showOHLC: false,
                showVolume:false,
                showInstrument:false,
                showPeriod:false
              },
              
            },

            chartReactConfig: {
              drawings: {
                sidebar: {
                  enabled: false
                }
              },
              toolbar: {
                showButtonsTooltip: true,
                enabled: false
              },
            

            },
          }} /> */}
