/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, PointStyles } from '../model/figure.model';
import { BubbleFigureProperties } from './common';
import { DrawingViewModel } from '../../model/drawing.view-model';
import { ExtendedContext } from '../../components/extended_context/ExtendedContext';
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { Vector } from '../../model/vector.model';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { DrawingType } from '../../model/drawing-types';
export interface PriceLabelProperties extends BubbleFigureProperties, PointStyles {
    showPrice: boolean;
    showTime: boolean;
    isTransparent?: boolean;
    showBorder?: boolean;
}
export declare class PriceLabel extends AbstractFigure<PriceLabelProperties> {
    private formatterProvider;
    points: number;
    readonly type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: PriceLabelProperties, chartBootstrap: Chart): void;
    getXAxisLabels: (chart: import("../../drawings.config").ChartWithDrawings, viewModel: DrawingViewModel, properties: import("../model/figure.model").CommonFigureProps, points: Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: import("../../drawings.config").ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
