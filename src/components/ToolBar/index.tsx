import React, { useContext, useEffect, useState } from "react";
import "../../styles/toolbar/index.css";
import "../../styles/toolbar/common.css";
import { AssetsToolBar } from "./AssetsToolBar";
import { ChartToolBar } from "./ChartToolBar";
import { IndicatorData, IndicatorToolBar } from "./IndicatorToolBar";
import { ToolsToolBar } from "./ToolsToolBar";
import { IconBar } from "../icons/IconBar";
import { ChartDialogData } from "../../lib/DataType";
import { AppContext } from "../../App";

export enum ToolVisible {
  none,
  assets,
  chart,
  indicator,
  tools,
}



import { AssetsData, getAssets, loadChartHistory } from "../../api";
import { IconLine } from "../icons/IconLine";
import { IconCandle } from "../icons/IconCandle";
import { IconArea } from "../icons/IconArea";
// import { generateCandlesData } from "@dx-private/dxchart5-modules";

export function ToolBar() {
  const appContext = useContext(AppContext);
  const [toolVisible, setToolVisible] = useState<ToolVisible>(ToolVisible.none);
  const [assetsData, setAssetsData] = useState<AssetsData[]>([]);
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>([]);

  const [chartToolBar, setChartToolBar] = useState<ChartDialogData>({
    autoScroll: true,
    selectedChart: "candle",
    showArea: true,
    selectedTimeFrame: "M1",
  });

  useEffect(() => {
    const durationType = chartToolBar.selectedTimeFrame[0].toLowerCase() as
      | "s"
      | "m"
      | "h"
      | "d";
    const duration = parseInt(chartToolBar.selectedTimeFrame.slice(1));

    let totalSec = 0;
    if (durationType == "s") totalSec = duration;
    if (durationType == "m") totalSec = duration * 60;
    if (durationType == "h") totalSec = duration * 60 * 60;
    if (durationType == "d") totalSec = duration * 60 * 60 * 24;

    console.log(durationType, duration);

    if (appContext.chart && appContext.chartReactApi) {
      // console.log(_candles, "m1");
      localStorage.setItem("aggregate", durationType + duration);
      appContext.setTimeIntervalInSec(totalSec);
    }
  }, [chartToolBar.selectedTimeFrame]);

  useEffect(() => {
    loadAssets();
    document.body.addEventListener("click", onOutsideClick, true);
    return () => {
      document.body.removeEventListener("click", onOutsideClick, true);
    };

  }, []);

  async function loadAssets() {
    const response = await getAssets();
    if (response.data) {
      setAssetsData(response.data);
    } else {
      alert(response.message);
    }

    onAssetSelect("BTCUSD");
  }

  function toggleDropdown(item: ToolVisible) {
    if (toolVisible == item) {
      setToolVisible(ToolVisible.none);
    } else {
      setToolVisible(item);
    }
  }

  const [selectedSymbol, setSelectedSymbol] = useState("");

  async function onAssetSelect(symbol: string) {
    setToolVisible(ToolVisible.none);
    setSelectedSymbol(symbol);
    appContext.setSymbol(symbol);
  }

  function rawIndicatorsToIndicators(rawIndicators: any): IndicatorData[] {
    if (appContext.studiesProvider) {
      const indicators: IndicatorData[] = appContext.studiesProvider
        .getStudies()
        .map((indicator) => {
          return {
            name: indicator.title,
            id: indicator.id,
          };
        });

      return indicators;
    }
    return [];
  }

  // useEffect(() => {

  // }, [selectedIndicators])

  function onOutsideClick(event: any) {
    // console.log(event.target);
    // console.log(event.target.className);

    let box = document.getElementById("assets-bar");
    if (!box) box = document.getElementById("chart-bar");
    if (!box) box = document.getElementById("indicator-bar");
    if (!box) box = document.getElementById("tools-bar");

    if (box) {
      const isInside = box.contains(event.target);
      if (!isInside) setToolVisible(ToolVisible.none);
    }
  }

  return (
    <div className="my-toolbar">
      <div className="inner">
        <div>
          <button
            className={
              toolVisible == ToolVisible.assets
                ? "inner-btn active"
                : "inner-btn"
            }
            onClick={() => toggleDropdown(ToolVisible.assets)}
          >
            {selectedSymbol}
            <svg
              className={toolVisible == ToolVisible.assets ? "flip" : ""}
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.102 8c-1.074 0-1.648 1.265-.94 2.073l5.521 6.31a1.75 1.75 0 0 0 2.634 0l5.522-6.31c.707-.808.133-2.073-.94-2.073H6.101Z" />
            </svg>
          </button>
          {toolVisible == ToolVisible.assets && (
            <AssetsToolBar
              assetsData={assetsData}
              hideToolbar={(symbol) => onAssetSelect(symbol)}
              selectedSymbol={selectedSymbol}
            />
          )}
        </div>

        <div>
          <button
            className={
              toolVisible == ToolVisible.chart
                ? "inner-btn active"
                : "inner-btn"
            }
            onClick={() => toggleDropdown(ToolVisible.chart)}
          >
            {chartToolBar.selectedChart == "bar" && <IconBar />}
            {chartToolBar.selectedChart == "area" && <IconArea />}
            {chartToolBar.selectedChart == "candle" && <IconCandle />}
            {chartToolBar.selectedChart == "line" && <IconLine />}
          </button>
          {toolVisible == ToolVisible.chart && (
            <ChartToolBar chart={chartToolBar} setChart={setChartToolBar} />
          )}
        </div>

        <div>
          <button
            className={
              toolVisible == ToolVisible.indicator
                ? "inner-btn active"
                : "inner-btn"
            }
            onClick={() => toggleDropdown(ToolVisible.indicator)}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.75 13.5a3.251 3.251 0 0 1 3.163 2.5h9.337a.75.75 0 0 1 .102 1.493l-.102.007h-9.337a3.251 3.251 0 0 1-6.326 0H2.75a.75.75 0 0 1-.102-1.493L2.75 16h2.837a3.251 3.251 0 0 1 3.163-2.5Zm6.5-9.5a3.251 3.251 0 0 1 3.163 2.5h2.837a.75.75 0 0 1 .102 1.493L21.25 8h-2.837a3.251 3.251 0 0 1-6.326 0H2.75a.75.75 0 0 1-.102-1.493L2.75 6.5h9.337A3.251 3.251 0 0 1 15.25 4Z" />
            </svg>
          </button>
          {toolVisible == ToolVisible.indicator && (
            <IndicatorToolBar
              allIndicators={rawIndicatorsToIndicators(
                appContext.studiesProvider
              )}
              chartReactApi={appContext.chartReactApi}
              selectedIndicators={selectedIndicators}
              setSelectedIndicators={setSelectedIndicators}
              hideToolbar={() => setToolVisible(ToolVisible.none)}
            />
          )}
        </div>

        <div>
          <button
            className={
              toolVisible == ToolVisible.tools
                ? "inner-btn active"
                : "inner-btn"
            }
            onClick={() => toggleDropdown(ToolVisible.tools)}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.94 5 19 10.06 9.062 20a2.25 2.25 0 0 1-.999.58l-5.116 1.395a.75.75 0 0 1-.92-.921l1.395-5.116a2.25 2.25 0 0 1 .58-.999L13.938 5Zm7.09-2.03a3.578 3.578 0 0 1 0 5.06l-.97.97L15 3.94l.97-.97a3.578 3.578 0 0 1 5.06 0Z" />
            </svg>
          </button>
          {toolVisible == ToolVisible.tools && (
            <ToolsToolBar
              hideToolbar={() => setToolVisible(ToolVisible.none)}
            />
          )}
        </div>
      </div>
      {/* <p className="legend">12:08:17 UTC+5:30</p> */}
    </div>
  );
}
