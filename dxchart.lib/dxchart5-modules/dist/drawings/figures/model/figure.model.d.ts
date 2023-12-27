/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { StringTMap } from '@devexperts/dxcharts-lite/dist/chart/utils/object.utils';
import { Vector } from '../../model/vector.model';
import { ChartWithDrawings, DrawingKeyPointStyle, FullChartConfigDrawings, LineProperties } from '../../drawings.config';
import { ExtendedContext, Paddings2D, PropertiesForFill } from '../../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../../model/drawing.view-model';
import { PointEvent } from '../../model/point-event';
import { YAxisLabelDrawProps } from '@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer';
import { DrawingModel } from '../../model/drawing.model';
import DrawingsModel, { DragDrawingInfo, NullableDrawingModel } from '../../model/drawings.model';
import { XAxisLabel } from '@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model';
import { CursorType } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { DrawingType } from '../../model/drawing-types';
import { PaneComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane.component';
import { ViewPoint } from '../../model/view-point';
export interface FibonacciCircle {
    line: LineProperties;
    coefficient: number;
    visible: boolean;
}
export type FigureLabelPlacementToTheLine = 'top' | 'middle' | 'bottom';
export type FigureLabelSidePlacement = 'left' | 'right';
export interface FigureLabelsCoefProperties {
    showCoefficient?: boolean;
}
export interface FigureLabelsPriceProperties {
    showPrice?: boolean;
}
export interface FigureLabelsPaddingsProperties {
    padding?: Paddings2D;
}
export interface FigureLabelsPlacementProperties {
    placementToTheLine?: FigureLabelPlacementToTheLine;
    sidePlacement?: FigureLabelSidePlacement;
}
export interface FigureStyleExtendProperties {
    extendLeft: boolean;
    extendRight: boolean;
}
export type FigureBackgroundProperties = PropertiesForFill;
export interface FibonacciPart extends LineProperties {
    coefficient: number;
    visible: boolean;
}
export interface DateValuePoint {
    value: number;
    timestamp: number;
}
export interface IndexValuePoint {
    value: number;
    index: number;
    hidden: boolean;
}
export interface PointStyles {
    points?: {
        defaultKeyPoint?: DrawingKeyPointStyle;
        activeKeyPoint?: DrawingKeyPointStyle;
        defaultHoverKeyPoint?: DrawingKeyPointStyle;
        activeHoverKeyPoint?: DrawingKeyPointStyle;
        addingKeyPoint?: DrawingKeyPointStyle;
    };
}
export interface FigureLineArrowsProperties {
    start?: boolean;
    end?: boolean;
    length?: number;
    angle?: number;
}
export interface CommonFigureProps extends FigureXYAxisLabelsProperties {
    line: LineProperties;
}
export interface FigureXYAxisLabelsProperties {
    showTime?: boolean;
    showPrice?: boolean;
}
export type FigureConstraint = (points: Vector[], changedIndex: number, chartBootstrap: ChartWithDrawings) => Vector[];
/**
 * Chart Abstract Figure Class.
 * Entry point of creating a drawing.
 */
export declare abstract class AbstractFigure<T> {
    abstract points: number;
    data: unknown;
    abstract readonly type: DrawingType;
    hidden?: StringTMap<number>;
    readonly commitOnEnter: boolean;
    textToolPoint?: Vector;
    isEditing?: boolean;
    updateHiddenProps?: (points: Vector[]) => void;
    getYAxisLabels?: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chartBootstrap: ChartWithDrawings) => YAxisLabelDrawProps[];
    getXAxisLabels?: (chart: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => Array<XAxisLabel>;
    constraint?: FigureConstraint;
    calculateKeyViewPoints?: (points: ViewPoint[]) => ViewPoint[];
    resize?: (viewModel: DrawingViewModel, movedPoint: PointEvent) => void;
    rotate?: (viewModel: DrawingViewModel, movedPoint: PointEvent, match: DragDrawingInfo) => void;
    borderMatchFunction?: (viewModel: DrawingViewModel, initialPoint: IndexValuePoint, chartBootstrap: ChartWithDrawings) => boolean;
    customMoveFigureAction?: (viewModel: DrawingViewModel, chartBootstrap: ChartWithDrawings, drawings: DrawingsModel, initial: IndexValuePoint, initialValues: IndexValuePoint[], point: PointEvent) => void;
    wheelFigureAction?: (increment: number) => void;
    onUp?: (viewModel: DrawingViewModel, drawings: DrawingsModel) => void;
    disablePointDrag?: boolean;
    showPoints?: (viewModel: DrawingViewModel) => boolean;
    beforeCommit?: (model: DrawingViewModel, drawings: DrawingsModel) => boolean;
    beforeCancel?: (model: DrawingModel<DrawingType>, drawings: DrawingsModel) => boolean;
    getClone(model: DrawingModel<DrawingType>): NullableDrawingModel;
    pointConstraint?: (point: PointEvent, viewModel: DrawingViewModel, chartBootstrap: ChartWithDrawings) => boolean;
    downMoveHandler?: (point: PointEvent, viewModel: DrawingViewModel, drawings: DrawingsModel) => void;
    isDisallowed?: (model: DrawingModel<DrawingType>, pointEvent: PointEvent) => boolean;
    getCursor?: (point: ViewPoint, viewModel: DrawingViewModel) => CursorType | undefined;
    abstract draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: T, chartBootstrap: ChartWithDrawings, paneComponent: PaneComponent): void;
    drawPoints?(vm: DrawingViewModel, ctx: ExtendedContext, chartConfig: FullChartConfigDrawings, drawings: DrawingsModel, radiusExtension: number): void;
    toString(): "line" | "trend" | "rectangle" | "text" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios";
}
