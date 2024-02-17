import { cloneUnsafe } from "@devexperts/dxcharts-lite/dist/chart/utils/object.utils";
import { ChartWithDrawings } from "@dx-private/dxchart5-modules/dist/drawings/drawings.config";
import { DrawingType } from "@dx-private/dxchart5-modules/dist/drawings/model/drawing-types";
import { DEFAULT_DRAWINGS_CONFIG } from "@dx-private/dxchart5-react/dist/config/drawings-config";
import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { ToolVisible } from ".";

export function ToolsToolBar(props: { hideToolbar: () => void }) {
  const appContext = useContext(AppContext);

  function addDrawing(type: DrawingType) {
    const configCopy = cloneUnsafe(
      DEFAULT_DRAWINGS_CONFIG[type as keyof typeof DEFAULT_DRAWINGS_CONFIG]
    );

    if (appContext.chartWithDrawings)
      appContext.chartWithDrawings.drawings.startDrawing(configCopy);

    props.hideToolbar();
  }

  return (
    <div className="tools" id="tools-bar">
      <button onClick={() => addDrawing("horizontal_line")}>
        Horizontal Line
      </button>
      <button onClick={() => addDrawing("vertical_line")}>Vertical Line</button>
      <button onClick={() => addDrawing("ray")}>Ray</button>
      <button onClick={() => addDrawing("fibonacci_retracements")}>
        Fibonacci Retracement
      </button>
      <button onClick={() => addDrawing("trend")}>Trend Line</button>
      <button onClick={() => addDrawing("rectangle")}>Rectangle</button>
      <button onClick={() => addDrawing("pitchfork")}>
        Andrew's Pitchfork
      </button>
    </div>
  );
}
