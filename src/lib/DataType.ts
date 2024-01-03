import { ChartReactAPI } from "@dx-private/dxchart5-react/dist/chart/view-models/api/chart-react-api.view-model";
import { CenterHoverDrawer } from "../plugins/CenterHoverDrawer";
import { Chart } from "@dx-private/dxchart5-modules";
import { Socket } from "socket.io-client";

export interface BoxWidgetData {
  icon: React.JSX.Element;
  callback: Function | null;
}

export interface ChartDialogData {
  selectedChart: "bar" | "line" | "area" | "candle";
  selectedTimeFrame: string;
  showArea: boolean;
  autoScroll: boolean;
}

export interface MyAppContextData {
  chartReactApi: React.RefObject<ChartReactAPI | undefined>;
  chartRef: React.RefObject<Chart | undefined>;
  socketRef: React.RefObject<Socket | undefined>;
  setTimeInterval(inv: number): void;
  setLastCandleTimestamp(timestamp: number): void;
}



export enum HoverDirection {
  up,
  down,
  none,
}

export interface TradeObject {
  id: string;
  startTimestamp: number;
  endTimestamp: number;
  price: number;
  timeInterval: number;
  tradeType: "higher" | "lower";
}
