import React, { useContext, useState } from "react";
import { IconBar } from "../icons/IconBar";
import { IconArea } from "../icons/IconArea";
import { IconLine } from "../icons/IconLine";
import { IconCandle } from "../icons/IconCandle";
import { ToggleWidget } from "../widgets/ToggleWidget";
import { AppContext } from "../../App";
import { ChartDialogData } from "../../lib/DataType";

export function ChartToolBar(props: {
  chart: ChartDialogData;
  setChart: React.Dispatch<React.SetStateAction<ChartDialogData>>;
}) {
  const appContext = useContext(AppContext);

  function changeChartType(type: "bar" | "line" | "candle" | "area") {
    if (appContext && appContext.chatRef.current) {
      appContext.chatRef.current.setChartType(type);
      props.setChart((old) => {
        const clone = structuredClone(old);
        clone.selectedChart = type;
        return clone;
      });
    }
  }

  function changeToggle(value: boolean, isScroll: boolean) {
    props.setChart((old) => {
      const clone = structuredClone(old);
      if (isScroll) {
        clone.autoScroll = value;
      } else {
        clone.showArea = value;
      }
      return clone;
    });
  }

  return (
    <div className="chart-bar">
      <p>Chart Types</p>
      <div className="chart-holder">
        <div
          onClick={() => changeChartType("area")}
          className={props.chart.selectedChart == "area" ? "active" : ""}
        >
          <IconArea />
          <span>Area</span>
        </div>
        <div
          onClick={() => changeChartType("line")}
          className={props.chart.selectedChart == "line" ? "active" : ""}
        >
          <IconLine />
          <span>Line</span>
        </div>
        <div
          onClick={() => changeChartType("bar")}
          className={props.chart.selectedChart == "bar" ? "active" : ""}
        >
          <IconBar />
          <span>Bar</span>
        </div>
        <div
          onClick={() => changeChartType("candle")}
          className={props.chart.selectedChart == "candle" ? "active" : ""}
        >
          <IconCandle />
          <span>Candle</span>
        </div>
      </div>

      <p>Settings</p>
      <div className="toggle-holder">
        <ToggleWidget
          default={props.chart.showArea}
          onChange={(value) => changeToggle(value, false)}
        />
        <span>Show Area</span>
      </div>

      <div className="toggle-holder">
        <ToggleWidget
          default={props.chart.autoScroll}
          onChange={(value) => changeToggle(value, true)}
        />
        <span>Enabled Auto Scroll</span>
      </div>
    </div>
  );
}
