/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureBackgroundProperties, FigureLabelsCoefProperties } from './model/figure.model';
import { Vector } from '../model/vector.model';
import { ChartWithDrawings, LineProperties } from '../drawings.config';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/drawing.view-model';
import { TextLabels } from './Text/Text';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { DrawingType } from '../model/drawing-types';
export interface GannFanProperties extends CommonFigureProps {
    hitTestLineOffset: number;
    rays: GannFanRay[];
    labels: FigureLabelsCoefProperties;
    background: Pick<FigureBackgroundProperties, 'opacity'>;
    text?: TextLabels;
}
export interface GannFanRay {
    line: LineProperties;
    coefficient: number;
    visible: boolean;
}
export interface VisibleRayGannFan {
    rayEnd: Vector;
    propsPart: {
        line: LineProperties;
        coefficient: number;
        visible: boolean;
    };
    coef: number;
}
export declare const gannCooficients: string[];
export declare class GannFan extends AbstractFigure<GannFanProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    private fillBetweenRays;
    private drawRay;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: GannFanProperties, chart: ChartWithDrawings): void;
    getXAxisLabels: (chart: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
