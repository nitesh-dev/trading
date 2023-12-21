import { Chart } from "@devexperts/dxcharts-lite";

export interface BoxWidgetData {
  icon: React.JSX.Element;
  callback: Function | null;
}

export interface ChartDialogData {
  selectedChart: "bar" | "line" | "area" | "candle";
  showArea: boolean;
  autoScroll: boolean;
}

export interface MyAppContextData {
  chatRef: React.RefObject<Chart | undefined>;
}
