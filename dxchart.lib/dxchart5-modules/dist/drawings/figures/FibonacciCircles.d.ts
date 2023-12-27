/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureLabelsCoefProperties, FigureBackgroundProperties, FibonacciCircle } from './model/figure.model';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/drawing.view-model';
import { Vector } from '../model/vector.model';
import { TextLabels } from './Text/Text';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { DrawingType } from '../model/drawing-types';
import { ChartWithDrawings } from '../drawings.config';
export interface FibonacciCirclesProperties extends CommonFigureProps {
    hitTestLineOffset: number;
    circles: FibonacciCircle[];
    labels: FigureLabelsCoefProperties;
    background: FigureBackgroundProperties;
    text?: TextLabels;
}
export declare class FibonacciCircles extends AbstractFigure<FibonacciCirclesProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: FibonacciCirclesProperties, chart: ChartWithDrawings): void;
    getXAxisLabels: (chart: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
