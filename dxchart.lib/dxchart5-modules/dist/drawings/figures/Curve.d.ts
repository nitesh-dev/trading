/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureBackgroundProperties, FigureStyleExtendProperties } from './model/figure.model';
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { Vector } from '../model/vector.model';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel, ViewPoint } from '../model/drawing.view-model';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { DrawingType } from '../model/drawing-types';
export declare const calculateRectangleKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
export interface CurveProperties extends CommonFigureProps {
    style: FigureStyleExtendProperties;
    background: FigureBackgroundProperties;
}
export declare class Curve extends AbstractFigure<CurveProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    hidden?: {
        readonly height: number;
    };
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: CurveProperties, chartBootstrap: Chart): void;
    calculateKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
    getXAxisLabels: (chart: import("../drawings.config").ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: import("../drawings.config").ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
