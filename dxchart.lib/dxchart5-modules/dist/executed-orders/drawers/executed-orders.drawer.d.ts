/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ExecutedOrdersModel } from '../model/executed-orders.model';
import { FullChartConfigExecutedOrders } from '../executed-orders.config';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import { Drawer } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
export declare const triangleSize: {
    height: number;
    width: number;
};
export declare class ExecutedOrdersDrawer implements Drawer {
    private readonly executedOrdersModel;
    private readonly config;
    private readonly canvasModel;
    private readonly canvasBoundsContainer;
    private readonly chartModel;
    constructor(executedOrdersModel: ExecutedOrdersModel, config: FullChartConfigExecutedOrders, canvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer, chartModel: ChartModel);
    getCanvasIds(): Array<string>;
    draw(): void;
    private drawExecutedOrders;
    private drawExecutedOrder;
    private drawCandleTriangle;
    private drawExecutedOrdersLabels;
    private drawExecutedOrderLabel;
    private getOrderLabelText;
}
