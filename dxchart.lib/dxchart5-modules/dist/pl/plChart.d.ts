/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { ValidatedChartElements } from '@devexperts/dxcharts-lite/dist/chart/canvas/chart-elements';
import { ChartPanComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pan/chart-pan.component';
import { PaneManager } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane-manager.component';
import { PaneComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane.component';
import { YAxisScaleHandler } from '@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-scale.handler';
import { DrawingManager } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import EventBus from '@devexperts/dxcharts-lite/dist/chart/events/event-bus';
import { CanvasInputListenerComponent } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import { HitTestCanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/hit-test-canvas.model';
import { TimeZoneModel } from '@devexperts/dxcharts-lite/dist/chart/model/time-zone.model';
import { Unsubscriber } from '@devexperts/dxcharts-lite/dist/chart/utils/function.utils';
import { FullPLChartConfig, PLChartConfig } from './PLChartConfig';
import { PLChartModel, PlModel } from './PLChartModel';
import { XAxisScaleHandler } from '@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-scale.handler';
/**
 * @doc-tags pl-chart
 */
export default class PlChart {
    bus: EventBus;
    config: FullPLChartConfig;
    components: Array<any>;
    canvasModel: CanvasModel;
    canvasBoundsContainer: CanvasBoundsContainer;
    drawingManager: DrawingManager;
    elements: ValidatedChartElements;
    parentElement: HTMLElement;
    plChartModel: PLChartModel;
    timeZoneModel: TimeZoneModel;
    canvasInputListener: CanvasInputListenerComponent;
    canvasModels: CanvasModel[];
    paneManager: PaneManager;
    chartPanComponent: ChartPanComponent;
    yAxisScaleHandler: YAxisScaleHandler;
    xAxisScaleHandler: XAxisScaleHandler;
    hitTestCanvasModel: HitTestCanvasModel;
    mainPane: PaneComponent;
    constructor(element: HTMLElement, localConfig?: PLChartConfig);
    private initYAxisDrawer;
    /**
     * Sets new PL model. With all required points and data.
     * @param model - new model
     */
    setModel(model: PlModel): void;
    /**
     * Sets visual X bounds.
     * @param start - beginning price
     * @param end - end X price
     */
    setXRange(start: number, end: number): void;
    addScaleChangeListener(listener: (scale: unknown) => void): Unsubscriber;
    createCanvasModel(): CanvasModel;
    clearChart(): void;
    updateConfig(config: PLChartConfig): void;
    private getFullConfig;
}
export declare function createPlChartLayoutTemplate(): HTMLTemplateElement;
