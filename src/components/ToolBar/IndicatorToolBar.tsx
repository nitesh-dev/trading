import React, { useEffect, useState } from "react";
import { IconStar } from "../icons/IconStar";
import { ChartReactAPI } from "@dx-private/dxchart5-react/dist/chart/view-models/api/chart-react-api.view-model";

export interface IndicatorData {
  id: string;
  name: string;
}

export function IndicatorToolBar({
  allIndicators,
  chartReactApi,
  selectedIndicators,
  setSelectedIndicators,
  hideToolbar
}: {
  chartReactApi: ChartReactAPI | undefined;
  allIndicators: IndicatorData[];
  selectedIndicators: string[];
  setSelectedIndicators: React.Dispatch<React.SetStateAction<string[]>>;
  hideToolbar: () => void;
}) {
  function onToggleIndicator(id: string) {
    if (!chartReactApi) return;

    let newIndicators = Array<string>();
    if (selectedIndicators.includes(id)) {
      newIndicators = selectedIndicators.filter((item) => item != id);
    } else {
      newIndicators = [...selectedIndicators, id];
    }

    setSelectedIndicators(newIndicators);
    chartReactApi.setStudiesByIds(newIndicators, "0");

    hideToolbar();
  }

  return (
    <div className="indicators scrollbar" id="indicator-bar">
      {allIndicators.map((indicator, index) => {
        return (
          <button
            key={index}
            className={
              selectedIndicators.includes(indicator.id) ? "active" : ""
            }
            onClick={() => onToggleIndicator(indicator.id)}
          >
            <IconStar />
            {indicator.name}
          </button>
        );
      })}
    </div>
  );
}
