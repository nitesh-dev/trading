/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Drawer } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { FullChartConfigExecutedOrders } from '../executed-orders.config';
import { ExecutedOrdersHitTestModel } from '../model/executed-orders-hit-test.model';
import { ExecutedOrdersModel } from '../model/executed-orders.model';
export declare class ExecutedOrdersPriceDrawer implements Drawer {
    private readonly executedOrdersModel;
    private readonly executedOrdersHitTestModel;
    private readonly config;
    private readonly chartModel;
    private readonly canvasModel;
    private readonly canvasBoundsContainer;
    constructor(executedOrdersModel: ExecutedOrdersModel, executedOrdersHitTestModel: ExecutedOrdersHitTestModel, config: FullChartConfigExecutedOrders, chartModel: ChartModel, canvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer);
    getCanvasIds(): Array<string>;
    draw(): void;
    private drawPriceLine;
}
