/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { ChartModule } from '..';
import { ChartWithExecutedOrders } from './executed-orders.config';
import { ExecutedOrdersComponent } from './executed-orders.component';
export declare const attachExecutedOrdersComponent: <T extends Chart>(_chart: T) => T & Chart & {
    executedOrders: ExecutedOrdersComponent;
};
export declare const ExecutedOrders: ChartModule;
