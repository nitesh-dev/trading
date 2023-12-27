/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import { ExecutedOrder, ExecutedOrdersMap } from './model/executed-orders.model';
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import { HitTestCanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/hit-test-canvas.model';
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { ExecutedOrdersColors, FullChartConfigExecutedOrders, ExecutedOrdersConfig } from './executed-orders.config';
import { DrawingManager } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import { DeepPartial } from '@devexperts/dxcharts-lite/dist/chart/utils/object.utils';
export declare class ExecutedOrdersComponent extends ChartBaseElement {
    readonly chartModel: ChartModel;
    private readonly canvasModel;
    private readonly hitTestCanvasModel;
    private readonly config;
    private readonly canvasBoundsContainer;
    private readonly drawingManager;
    private model;
    private hitTestModel;
    constructor(chartModel: ChartModel, canvasModel: CanvasModel, hitTestCanvasModel: HitTestCanvasModel, config: FullChartConfigExecutedOrders, canvasBoundsContainer: CanvasBoundsContainer, drawingManager: DrawingManager);
    get executedOrderHoveredSubject(): import("rxjs").BehaviorSubject<import("./model/executed-orders-hit-test.model").HoveredExecutedOrder | null>;
    /**
     * Sets executed orders to the chart.
     */
    setExecutedOrders(executedOrders: ExecutedOrdersMap | ExecutedOrder[]): void;
    /**
     * Changes the executed orders visibility.
     */
    setVisible(visible: boolean): void;
    /**
     * Sets executed orders type.
     */
    setLabelsVisible(visible: boolean): void;
    /**
     * Changes the config of executed orders.
     */
    changeConfig(config: DeepPartial<ExecutedOrdersConfig>): void;
    /**
     * Changes the colors for executed orders.
     */
    changeColorsConfig(colors: DeepPartial<ExecutedOrdersColors>): void;
}
