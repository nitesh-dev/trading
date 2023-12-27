/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, FibonacciPart, CommonFigureProps, FigureLabelsCoefProperties, FigureBackgroundProperties } from './model/figure.model';
import { Vector } from '../model/vector.model';
import { ChartWithDrawings } from '../drawings.config';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/drawing.view-model';
import { TextLabels } from './Text/Text';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { DrawingType } from '../model/drawing-types';
export interface FibonacciRaysProperties extends CommonFigureProps {
    hitTestLineOffset: number;
    rays: FibonacciPart[];
    labels: FigureLabelsCoefProperties;
    background: FigureBackgroundProperties;
    text?: TextLabels;
}
export interface VisibleRayFR {
    rayEnd: Vector;
    propsPart: FibonacciPart;
    coef: number;
}
export declare class FibonacciRays extends AbstractFigure<FibonacciRaysProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    her: boolean;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: FibonacciRaysProperties, chart: ChartWithDrawings): void;
    private fillBetweenRays;
    private drawRay;
    private sortUnique;
    getXAxisLabels: (chart: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
