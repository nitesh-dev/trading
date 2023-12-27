
import { ChartReactAPI } from "@dx-private/dxchart5-react/dist/chart/view-models/api/chart-react-api.view-model";
import { CenterHoverDrawer } from "../plugins/CenterHoverDrawer";

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
  chatRef: React.RefObject<ChartReactAPI | undefined>;
  centerHoverDrawer: React.RefObject<CenterHoverDrawer | undefined>;
}


export enum HoverDirection{
  up,
  down,
  none
}