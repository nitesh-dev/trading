/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { DataSeriesModel, VisualSeriesPoint } from '@devexperts/dxcharts-lite/dist/chart/model/data-series.model';
import { ChartDrawerConfig, SeriesDrawer } from '@devexperts/dxcharts-lite/dist/chart/drawers/data-series.drawer';
import { FullChartConfigStudies } from '../studies.config';
export declare class AboveCandleTextDrawer implements SeriesDrawer {
    private config;
    private chartModel;
    constructor(config: FullChartConfigStudies, chartModel: ChartModel);
    draw(ctx: CanvasRenderingContext2D, allPoints: VisualSeriesPoint[][], model: DataSeriesModel, drawerConfig: ChartDrawerConfig): void;
}
