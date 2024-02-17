/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Drawer } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import { FullChartConfigExecutedOrders } from '../executed-orders.config';
import { HitTestCanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/hit-test-canvas.model';
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { ExecutedOrdersModel } from '../model/executed-orders.model';
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { ExecutedOrdersHitTestModel } from '../model/executed-orders-hit-test.model';
export declare const hitTestRect: {
    height: number;
    width: number;
};
export declare class ExecutedOrdersHitTestDrawer implements Drawer {
    private readonly executedOrdersModel;
    private readonly executedOrderHitTestModel;
    private readonly config;
    private readonly hitTestCanvasModel;
    private readonly canvasBoundsContainer;
    private readonly chartModel;
    private drawPredicate;
    constructor(executedOrdersModel: ExecutedOrdersModel, executedOrderHitTestModel: ExecutedOrdersHitTestModel, config: FullChartConfigExecutedOrders, hitTestCanvasModel: HitTestCanvasModel, canvasBoundsContainer: CanvasBoundsContainer, chartModel: ChartModel, drawPredicate?: () => boolean);
    getCanvasIds(): Array<string>;
    draw(): void;
    private drawExecutedOrders;
    private drawExecutedOrder;
    private drawOrderHitTestBox;
}
