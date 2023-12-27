/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { CursorHandler } from '@devexperts/dxcharts-lite/dist/chart/canvas/cursor.handler';
import { BarType, CursorType } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { ChartInstrument } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.component';
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { ChartPanComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pan/chart-pan.component';
import { PaneComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane.component';
import EventBus from '@devexperts/dxcharts-lite/dist/chart/events/event-bus';
import { CanvasInputListenerComponent, Point } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { HitTestCanvasModel, HitTestSubscriber } from '@devexperts/dxcharts-lite/dist/chart/model/hit-test-canvas.model';
import { Pixel, Price } from '@devexperts/dxcharts-lite/dist/chart/model/scaling/viewport.model';
import VisualCandle from '@devexperts/dxcharts-lite/dist/chart/model/visual-candle';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import Canvases from '../canvases';
import { DrawingsEventListeners } from '../components/DrawingsEventListeners';
import { ChartWithDrawings, Drawing, DrawingCursors, FullChartConfigDrawings } from '../drawings.config';
import { AbstractFigure, FigureConstraint } from '../figures/model/figure.model';
import { DrawingType } from './drawing-types';
import { DrawingConfig, DrawingModel, NewDrawingConfig } from './drawing.model';
import { DrawingViewModel, ViewPoint } from './drawing.view-model';
import { DateValuePoint, IndexValuePoint, PointEvent } from './point-event';
import { Vector } from './vector.model';
export type ContextState = 'HIGHLIGHTING' | 'ADDING' | 'MOVING';
export type HoverType = 'FIGURE' | 'POINT' | 'TEXT';
export interface DragDrawingInfo {
    type: HoverType;
    viewModel: DrawingViewModel;
    viewPoint: Vector;
    initial: IndexValuePoint;
    initialValues: IndexValuePoint[];
    isBorderMatch: boolean;
    dragPointIndex?: number;
}
export type NullableDrawingModel = DrawingModel<DrawingType> | null;
/**
 * Model for all drawings.
 * Subscribes to various drawing events and emits them as well.
 * Controls drawings active state. Generates ID for new drawings.
 * Creates and switches the canvas contexts when drawing.
 */
export default class DrawingsModel implements HitTestSubscriber<NullableDrawingModel> {
    readonly eventBus: EventBus;
    readonly staticCanvas: HTMLCanvasElement;
    readonly hitTestCanvasModel: HitTestCanvasModel;
    readonly chartConfig: FullChartConfigDrawings;
    chartModel: ChartModel;
    private canvasBoundsContainer;
    readonly chartBootstrap: ChartWithDrawings;
    readonly drawingsFormatterProvider: () => DateTimeFormatter;
    readonly canvases: Canvases;
    private chartPanComponent;
    paneComponent: PaneComponent;
    private cursorHandler;
    paneComponents: Record<string, PaneComponent>;
    magnet: number;
    visible: boolean;
    models: Record<ChartInstrument['symbol'], DrawingModel<DrawingType>[]>;
    viewModels: Record<string, DrawingViewModel>;
    eventListeners: DrawingsEventListeners;
    allIds: string[];
    get instrumentCode(): string;
    get currentModels(): DrawingModel<"line" | "trend" | "rectangle" | "text" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">[];
    private _activeModel;
    private _hoveredModel;
    set activeModel(model: NullableDrawingModel);
    set hoveredModel(model: NullableDrawingModel);
    get hoveredModel(): NullableDrawingModel;
    get activeModel(): NullableDrawingModel;
    _activeMatch: DragDrawingInfo | undefined;
    private isDrawingMoved;
    contextState: ContextState;
    private candleMagnetPointsByChartTypeMap;
    readonly events: {
        drawingMoved: Subject<DrawingModel<"line" | "trend" | "rectangle" | "text" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">>;
        drawingRemoved: Subject<DrawingModel<"line" | "trend" | "rectangle" | "text" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">[]>;
        drawingsUpdated: Observable<DrawingModel<"line" | "trend" | "rectangle" | "text" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">[]>;
        _drawingsUpdatedOld: Subject<void>;
        drawingDblClick: Subject<DrawingModel<"line" | "trend" | "rectangle" | "text" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">>;
        drawingSelected: BehaviorSubject<NullableDrawingModel>;
        drawingModified: Subject<DrawingModel<"line" | "trend" | "rectangle" | "text" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">>;
        drawingStarted: Subject<DrawingModel<"line" | "trend" | "rectangle" | "text" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">>;
        drawingFinished: Subject<DrawingModel<"line" | "trend" | "rectangle" | "text" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">>;
    };
    private drawingsHtIdCounter;
    getNewHitTestId: () => number;
    constructor(eventBus: EventBus, staticCanvas: HTMLCanvasElement, hitTestCanvasModel: HitTestCanvasModel, chartConfig: FullChartConfigDrawings, chartModel: ChartModel, canvasBoundsContainer: CanvasBoundsContainer, canvasInputListener: CanvasInputListenerComponent, chartBootstrap: ChartWithDrawings, drawingsFormatterProvider: () => DateTimeFormatter, canvases: Canvases, chartPanComponent: ChartPanComponent, paneComponent: PaneComponent, cursorHandler: CursorHandler, paneComponents: Record<string, PaneComponent>);
    private registerDefaultMagnetPointsResolvers;
    resolveDrawingCursorType(type: DrawingType): DrawingCursors;
    /**
     * We disable drawing events listeners if no drawing is selected or hovered
     * @doc-tags tricky, optimization
     */
    private manageDrawingEventListeners;
    /**
     * Gets id for new drawing using uuid
     */
    nextId(): string;
    initModels(activeModel?: NullableDrawingModel): void;
    startModel(config: DrawingConfig<DrawingType>): DrawingModel<"line" | "trend" | "rectangle" | "text" | "horizontal_line" | "horizontal_ray" | "vertical_line" | "extended_line" | "ellipse" | "pitchfork" | "extended" | "ray" | "curve" | "arc" | "info_line" | "brush" | "path" | "date_price_range" | "date_range" | "price_range" | "highlighter" | "icon" | "gann_box" | "gann_square" | "fibonacci_ark" | "fibonacci_circles" | "fibonacci_rays" | "gann_fan" | "trend_channel" | "multichannel" | "fibonacci_retracements" | "callout" | "price_label" | "base_isolation_tool" | "magnifying_tool_rectangle" | "magnifying_tool_time_range" | "magnifying_tool_time_range_wheel" | "vertical_arrow_up" | "vertical_arrow_down" | "arrow" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios">;
    createOrMergeModel(config: DrawingConfig<DrawingType>, instrument?: string): DrawingModel<any>;
    setActiveDrawing(config: DrawingConfig<DrawingType> | null): void;
    redraw(): void;
    fireModelDone(model: DrawingModel<DrawingType>): void;
    fireModelsRemoved(models: DrawingModel<DrawingType>[]): void;
    fireModelMoved(): void;
    fireModelModified(): void;
    fireModelUpdated(model: NullableDrawingModel): void;
    exportFigures(): Record<ChartInstrument['symbol'], Drawing<DrawingType>[]>;
    updateViewModel(model: NullableDrawingModel): void;
    cachePoints(model: NullableDrawingModel): void;
    /**
     * You can use this method to determine which magnet points should be used for specified chart type.
     * @param chartType
     * @param resolver
     */
    registerCandleMagnetPointsResolver(chartType: BarType, resolver: (vc: VisualCandle) => Price[]): void;
    /**
     * This function is used for drawing magnet mode to help attach drawing point to some part of the bar.
     * For example, if we have line bar type, then there is only one possible point to attach.
     * In case we have candle bar type there are 4 possible magnet points: open, close, high and low.
     */
    candleMagnetPointsByChartType(chartType: BarType, visualCandle: VisualCandle): Price[];
    adjustByCandle(y: number, visualCandle: VisualCandle): boolean | {
        value: number;
        y: number;
    };
    /**
     * Adjusts current value (price) to chartModel.instrument's price precision.
     */
    adjustToPriceIncrement(price: number): number;
    resolvePaneComponent(): PaneComponent | undefined;
    private updateDrawingPaneInfo;
    resolvePointEvent(x: Pixel, _y: Pixel, allowPointOutsidePane?: boolean, paneComponent?: PaneComponent | undefined): PointEvent;
    downAction(point: PointEvent, model?: NullableDrawingModel): false | undefined;
    wheelAction(increment: number): void;
    downMoveAction(point: PointEvent): void;
    setDrawingLocked(drawing: DrawingModel<DrawingType>, locked: boolean): void;
    setDrawingVisible(drawing: DrawingModel<DrawingType>, visible: boolean): void;
    removeExtraPointsFromModel(): void;
    commitModel(): void;
    private updateDraggingPointVisibility;
    highlightingDownAction(point: PointEvent, model: NullableDrawingModel): void;
    commitOrDraw(newPointFixed: boolean): void;
    applyFigurePoints(index: number, pointEvent: PointEvent, points: DateValuePoint[] | IndexValuePoint[], isKeyPoints: boolean): void;
    moveAction(point: PointEvent, model?: NullableDrawingModel): void;
    moveWholeFigure(point: PointEvent, model: DrawingModel<DrawingType>, match: DragDrawingInfo): void;
    moveDrawingPoint(point: PointEvent, model: DrawingModel<DrawingType>, match: DragDrawingInfo): void;
    moveDrawing(point: PointEvent): void;
    getFigure(): AbstractFigure<unknown> | undefined;
    getFigurePoints(stickyPoint: PointEvent, figureConstraint: FigureConstraint): Vector[];
    getFigureViewPoints(): ViewPoint[];
    setFigureLastPoint(index: number, stickyPoint: PointEvent): ViewPoint[];
    upAction(): void;
    dblClickAction(point: PointEvent, model?: NullableDrawingModel): void;
    keyDownAction(key: string): void;
    getIdRange(): [number, number];
    lookup(id: number): DrawingModel<DrawingType> | undefined;
    onHover(model: NullableDrawingModel, point: Point): void;
    onZoom(model: NullableDrawingModel, point: Point): void;
    resolveCursor(point: Point, model?: DrawingModel<DrawingType>): CursorType | undefined;
    onDblClick(model: NullableDrawingModel, point: Point): void;
    onMouseDown(model: NullableDrawingModel, point: Point): void;
    valueToView(pane: PaneComponent, point: IndexValuePoint): Vector;
    match(point: PointEvent, id: string): DragDrawingInfo | undefined;
    switchContext(newContextState: ContextState): void;
    removeAllModels(): void;
    removeModels: (modelsToDelete: DrawingModel<DrawingType>[]) => void;
    setActiveModel: (model: NullableDrawingModel) => void;
    sameModels(firstModel: NullableDrawingModel, secondModel: NullableDrawingModel): boolean;
    updateModel(model: DrawingModel<DrawingType>): void;
    cancelDrawing: () => void;
    removeDrawing(id: string): boolean;
    rebuildModelsIndexes(): void;
    handleDataUpdates(): void;
    updateViewModels(): void;
    addDrawing<T extends DrawingType>(drawingConfig: NewDrawingConfig<T>): DrawingConfig<T>;
    setDrawingsOrder(orderedModelIds: string[]): void;
}
