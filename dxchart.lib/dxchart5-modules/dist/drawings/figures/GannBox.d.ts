/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureLabelsCoefProperties, FigureBackgroundProperties } from './model/figure.model';
import { ChartWithDrawings, LineProperties } from '../drawings.config';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/drawing.view-model';
import { Vector } from '../model/vector.model';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { DrawingType } from '../model/drawing-types';
import { TextLabels } from './Text/Text';
import { ViewPoint } from '../model/view-point';
export interface GannBoxProperties extends CommonFigureProps {
    background: Pick<FigureBackgroundProperties, 'opacity'>;
    labels: FigureLabelsCoefProperties;
    coefficients: {
        priceLevel: GannBoxCoefficient[];
        timeLevel: GannBoxCoefficient[];
    };
    text: TextLabels;
}
export interface GannBoxCoefficient {
    value: number;
    visible: boolean;
    line: LineProperties;
}
export declare class GannBox extends AbstractFigure<GannBoxProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    private drawLine;
    private drawLabel;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: GannBoxProperties, chart: ChartWithDrawings): void;
    calculateKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
    constraint: (points: Vector[], changedIndex: number) => Vector[];
    getXAxisLabels: (chart: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
