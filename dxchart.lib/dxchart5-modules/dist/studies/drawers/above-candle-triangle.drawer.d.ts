/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { SeriesDrawer } from '@devexperts/dxcharts-lite/dist/chart/drawers/data-series.drawer';
import { DataSeriesModel, VisualSeriesPoint } from '@devexperts/dxcharts-lite/dist/chart/model/data-series.model';
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
export declare class AboveCandleTriangleDrawer implements SeriesDrawer {
    private chartModel;
    constructor(chartModel: ChartModel);
    draw(ctx: CanvasRenderingContext2D, allPoints: VisualSeriesPoint[][], model: DataSeriesModel): void;
    private drawCandleTriangle;
    private transformValueToColor;
}
