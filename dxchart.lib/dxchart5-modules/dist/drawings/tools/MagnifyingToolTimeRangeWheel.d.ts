/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { LineProperties } from '../drawings.config';
import DrawingsModel from '../model/drawings.model';
import { DrawingType } from '../model/drawing-types';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { AbstractFigure, FigureXYAxisLabelsProperties } from '../figures/model/figure.model';
import { DrawingViewModel, ViewPoint } from '../model/drawing.view-model';
import { Vector } from '../model/vector.model';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
export interface MagnifyingToolTimeRangeWheelProperties extends FigureXYAxisLabelsProperties {
    line: LineProperties;
    background: {
        fillStyle: string;
    };
    projection: LineProperties;
    text: {
        textSize: string;
        textBg: string;
        backgroundOffsetWidth: number;
        backgroundOffsetHeight: number;
    };
}
export declare const calculateRectangleKeyViewPoints: (points: ViewPoint[], figureWheelIncrement: number) => ViewPoint[];
export declare class MagnifyingToolTimeRangeWheel extends AbstractFigure<MagnifyingToolTimeRangeWheelProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    figureWheelIncrement: number;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: MagnifyingToolTimeRangeWheelProperties, chartBootstrap: Chart): void;
    getXAxisLabels: (chart: import("../drawings.config").ChartWithDrawings, viewModel: DrawingViewModel, properties: import("../figures/model/figure.model").CommonFigureProps, points: Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    calculateKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
    wheelFigureAction: (increment: number) => void;
    beforeCommit: (drawingViewModel: DrawingViewModel, drawings?: DrawingsModel) => boolean;
}
