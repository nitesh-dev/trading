/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartDrawerConfig, SeriesDrawer } from '@devexperts/dxcharts-lite/dist/chart/drawers/data-series.drawer';
import { CandleSeriesModel } from '@devexperts/dxcharts-lite/dist/chart/model/candle-series.model';
import { DataSeriesModel, VisualSeriesPoint } from '@devexperts/dxcharts-lite/dist/chart/model/data-series.model';
import { Viewable } from '@devexperts/dxcharts-lite/dist/chart/model/scaling/viewport.model';
import VisualCandle from '@devexperts/dxcharts-lite/dist/chart/model/visual-candle';
import { ChartConfigComponentsChartEquivolume, FullChartConfigEquivolume } from './EquivolumeConfig';
type CandleSeriesModelEquivolume = CandleSeriesModel & {
    colors: FullChartConfigEquivolume['colors'];
};
export declare class EquivolumeDrawer implements SeriesDrawer {
    private config;
    constructor(config: ChartConfigComponentsChartEquivolume);
    private setFillStyle;
    draw(ctx: CanvasRenderingContext2D, points: VisualSeriesPoint[][], model: DataSeriesModel, drawerConfig?: ChartDrawerConfig): void;
    drawCandle(ctx: CanvasRenderingContext2D, drawerConfig: ChartDrawerConfig, candleSeries: CandleSeriesModelEquivolume, visualCandle: VisualCandle, nextVisualCandle: VisualCandle | undefined): void;
    fillCandle(ctx: CanvasRenderingContext2D, viewportModel: Viewable, visualCandle: VisualCandle, baseX: number, lineStart: number, width: number): void;
}
export {};
