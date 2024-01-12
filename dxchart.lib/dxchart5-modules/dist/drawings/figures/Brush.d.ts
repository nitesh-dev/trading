/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DrawingType } from '../model/drawing-types';
import { AbstractFigure, CommonFigureProps, FigureBackgroundProperties, FigureLineArrowsProperties } from './model/figure.model';
import { DrawingViewModel, ViewPoint } from '../model/drawing.view-model';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { PointEvent } from '../model/point-event';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import DrawingsModel from '../model/drawings.model';
export interface BrushProperties extends CommonFigureProps {
    background: FigureBackgroundProperties;
    arrows: FigureLineArrowsProperties;
}
export declare class Brush extends AbstractFigure<BrushProperties> {
    private formatterProvider;
    points: number;
    readonly type: DrawingType;
    readonly disablePointDrag: boolean;
    constructor(formatterProvider?: () => DateTimeFormatter);
    downMoveHandler: (point: PointEvent, viewModel: DrawingViewModel, drawings: DrawingsModel) => void;
    calculateKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
    onUp: (viewModel: DrawingViewModel, drawings: DrawingsModel) => void;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: BrushProperties): void;
    getXAxisLabels: (chart: import("../drawings.config").ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: import("../model/vector.model").Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: import("../drawings.config").ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
