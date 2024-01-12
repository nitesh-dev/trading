/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { LineProperties } from '../drawings.config';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingType } from '../model/drawing-types';
import { DrawingViewModel } from '../model/drawing.view-model';
import { TextLabels } from './Text/Text';
import { AbstractFigure, CommonFigureProps, FigureBackgroundProperties } from './model/figure.model';
export interface GannSquareProperties extends CommonFigureProps {
    background: Pick<FigureBackgroundProperties, 'opacity'>;
    coefficients: {
        levels: GannSquareCoefficient[];
        fans: GannSquareCoefficient[];
        arcs: GannSquareCoefficient[];
    };
    text: TextLabels;
}
export interface GannSquareCoefficient {
    value: number;
    visible: boolean;
    line: LineProperties;
    type?: 'toZero' | 'toOne';
}
export declare class GannSquare extends AbstractFigure<GannSquareProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    private getCurrentShift;
    private getRadiusByType;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: GannSquareProperties): void;
    getXAxisLabels: (chart: import("../drawings.config").ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: import("../model/vector.model").Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: import("../drawings.config").ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
