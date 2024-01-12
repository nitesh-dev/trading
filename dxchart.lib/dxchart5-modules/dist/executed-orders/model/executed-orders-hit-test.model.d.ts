/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { HitTestSubscriber } from '@devexperts/dxcharts-lite/dist/chart/model/hit-test-canvas.model';
import { ExecutedOrdersModel, VisualExecutedOrder } from './executed-orders.model';
import { BehaviorSubject } from 'rxjs';
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
export interface HoveredExecutedOrder extends VisualExecutedOrder {
    x: number;
    y: number;
}
export declare class ExecutedOrdersHitTestModel extends ChartBaseElement implements HitTestSubscriber {
    private executedOrdersModel;
    executedOrderHoveredSubject: BehaviorSubject<HoveredExecutedOrder | null>;
    private idToHtIdMap;
    private htIdToIdMap;
    private nextIdCounter;
    constructor(executedOrdersModel: ExecutedOrdersModel);
    protected doActivate(): void;
    private generateHtIdMap;
    get orderIdToHtIdMap(): Map<string, number>;
    private getNextId;
    getIdRange(): [number, number];
    onHover(order: VisualExecutedOrder | null): void;
    onTouchStart(model: VisualExecutedOrder | null): void;
    lookup(htId: number): VisualExecutedOrder | undefined;
}
