/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/drawing.view-model';
import { AbstractFigure, CommonFigureProps, FibonacciPart, FigureBackgroundProperties, FigureLabelsCoefProperties, FigureLabelsPaddingsProperties, FigureLabelsPlacementProperties, FigureLabelsPriceProperties } from './model/figure.model';
import { TextLabels } from './Text/Text';
import { DrawingType } from '../model/drawing-types';
import { ChartWithDrawings } from '../drawings.config';
type FibonacciTimeExtensionLabelsProperties = FigureLabelsPriceProperties & FigureLabelsCoefProperties & FigureLabelsPlacementProperties;
export interface FibonacciTimeExtensionProperties extends CommonFigureProps {
    hitTestLineOffset: number;
    zones: FibonacciPart[];
    labels: FibonacciTimeExtensionLabelsProperties & FigureLabelsPaddingsProperties;
    background: FigureBackgroundProperties;
    text?: TextLabels;
}
export declare class FibonacciTimeExtension extends AbstractFigure<FibonacciTimeExtensionProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: FibonacciTimeExtensionProperties, chartBootstrap: ChartWithDrawings): void;
    getXAxisLabels: (chart: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: import("../model/vector.model").Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
export {};
