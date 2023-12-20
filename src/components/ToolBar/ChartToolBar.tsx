import React, { useState } from "react";
import { IconBar } from "../icons/IconBar";
import { IconArea } from "../icons/IconArea";
import { IconLine } from "../icons/IconLine";
import { IconCandle } from "../icons/IconCandle";
import { ToggleWidget } from "../widgets/ToggleWidget";

export function ChartToolBar() {
  return (
    <div className="chart-bar">
      <p>Chart Types</p>
      <div className="chart-holder">
        <div>
          <IconArea />
          <span>Area</span>
        </div>
        <div>
          <IconLine />
          <span>Line</span>
        </div>
        <div>
          <IconBar />
          <span>Bar</span>
        </div>
        <div>
          <IconCandle />
          <span>Candle</span>
        </div>
      </div>

      <p>Settings</p>
      <div className="toggle-holder">
        <ToggleWidget default={false} onChange={() => {}} />
        <span>Show Area</span>
      </div>

      <div className="toggle-holder">
        <ToggleWidget default={false} onChange={() => {}} />
        <span>Enabled Auto Scroll</span>
      </div>
    </div>
  );
}
