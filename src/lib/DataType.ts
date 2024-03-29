import { ChartReactAPI } from "@dx-private/dxchart5-react/dist/chart/view-models/api/chart-react-api.view-model";
import { CenterHoverDrawer } from "../plugins/CenterHoverDrawer";
import { Chart } from "@dx-private/dxchart5-modules";
import { Socket } from "socket.io-client";
import VisualCandle from "@devexperts/dxcharts-lite/dist/chart/model/visual-candle";
import { ChartCandleData } from "@dx-private/dxchart5-react/dist/providers/chart-data-provider";
import { ChartWithDrawings } from "@dx-private/dxchart5-modules/dist/drawings/drawings.config";
import { DxStudiesProvider } from "@dx-private/dxchart5-react/dist/providers/studies/dx-studies-provider";

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
  chartReactApi: ChartReactAPI | undefined;
  chart: Chart | undefined;
  socket: Socket | undefined;
  studiesProvider: DxStudiesProvider | undefined;
  setTimeIntervalInSec(inv: number): void;
  setSymbol(symbol: string): void;
  historyData: ChartCandleData[];
  chartWithDrawings: ChartWithDrawings | undefined;
}

export enum HoverDirection {
  up,
  down,
  none,
}

export interface TradeObject {
  id: string;
  isClosed: boolean;
  startTimestamp: number;
  endTimestamp: number;
  price: number;
  timeInterval: number;
  tradeType: "higher" | "lower";
  candle: VisualCandle;
  value: string;
  isProfit: boolean;
}

export interface ServerChartData {
  high: number;
  low: number;
  open: number;
  close: number;
  time: number;
}

export interface TradeToastData {
  place: "start" | "end";
  type: "higher" | "lower";
  isProfit: boolean;
  title: string;
  symbol: string;
  value1: string;
  value2: string;
}
