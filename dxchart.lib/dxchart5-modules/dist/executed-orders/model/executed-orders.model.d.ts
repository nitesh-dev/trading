/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import VisualCandle from '@devexperts/dxcharts-lite/dist/chart/model/visual-candle';
import { FullChartConfigExecutedOrders } from '../executed-orders.config';
import { Pixel } from '@devexperts/dxcharts-lite/dist/chart/model/scaling/viewport.model';
import { Subject } from 'rxjs';
import { Point } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
export interface ExecutedOrder {
    id: string;
    side: 'sell' | 'buy';
    price: number;
    quantity: number;
    timestamp: number;
}
export interface VisualExecutedOrder extends ExecutedOrder {
    /**
     * Index of the element in the associated but/sell array
     *
     * @example
     * const executedOrdersPerTimestampMap = {
     *   'timestamp': {
     * 		visualCandle: {...},
     * 		orders: {
     *          // ------------ idx in this array ----------
     *      	buy: [orderId1, SELECTED_ORDER_ID, ...]
     *          sell: ...
     *      }
     *    }
     * }
     */
    idx: number;
    /**
     * Timestamp of an associated candle.
     */
    candleTimestamp: number;
}
type OrderIdsByOrderSide = Record<VisualExecutedOrder['side'], string[]>;
export interface ExecutedOrdersPerTimestamp {
    visualCandle: VisualCandle;
    orders: OrderIdsByOrderSide;
}
export type ExecutedOrdersMap = Map<string, VisualExecutedOrder>;
export declare class ExecutedOrdersModel extends ChartBaseElement {
    private readonly config;
    private readonly chartModel;
    executedOrdersChanged: Subject<void>;
    executedOrdersMap: ExecutedOrdersMap;
    executedOrdersPerTimestampMap: Map<number, ExecutedOrdersPerTimestamp>;
    constructor(config: FullChartConfigExecutedOrders, chartModel: ChartModel);
    protected doActivate(): void;
    getExecutedOrderYCoord(order: VisualExecutedOrder): Pixel;
    getExecutedOrderCoords(order: VisualExecutedOrder): Point;
    setExecutedOrders(executedOrders: Map<string, ExecutedOrder> | ExecutedOrder[]): void;
}
export {};
