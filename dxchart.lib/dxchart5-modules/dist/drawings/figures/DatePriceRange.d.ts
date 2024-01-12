/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureBackgroundProperties } from './model/figure.model';
import { ChartWithDrawings, LineProperties } from '../drawings.config';
import { DrawingViewModel } from '../model/drawing.view-model';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { Vector } from '../model/vector.model';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { FigureMeasureBoxProperties } from './components/measure-box';
import { DrawingType } from '../model/drawing-types';
import { PaneComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane.component';
interface DatePriceRangeBorderProperties {
    visible?: boolean;
    all?: LineProperties;
    left?: LineProperties;
    right?: LineProperties;
    top?: LineProperties;
    bottom?: LineProperties;
}
export interface DatePriceRangeProperties extends CommonFigureProps {
    borders: DatePriceRangeBorderProperties;
    background: FigureBackgroundProperties;
    measureBoxFigure: FigureMeasureBoxProperties;
}
export type RangeType = 'date' | 'price' | 'both';
export declare class DatePriceRange extends AbstractFigure<DatePriceRangeProperties> {
    private formatterProvider;
    private rangeType;
    points: number;
    readonly type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter, rangeType?: RangeType);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: DatePriceRangeProperties, chartBootstrap: ChartWithDrawings, paneComponent: PaneComponent): void;
    getXAxisLabels: (chart: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
export {};
