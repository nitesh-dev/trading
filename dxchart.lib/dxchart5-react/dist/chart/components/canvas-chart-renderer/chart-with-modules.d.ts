/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { ChartWithDrawings } from '@dx-private/dxchart5-modules/dist/drawings/drawings.config';
import { ChartWithEquivolume } from '@dx-private/dxchart5-modules/dist/equivolume/EquivolumeConfig';
import { ChartWithHeikinAshi } from '@dx-private/dxchart5-modules/dist/heikin-ashi/HeikinAshiConfig';
import { ChartWithNews } from '@dx-private/dxchart5-modules/dist/news/news.config';
import { ChartWithStudies } from '@dx-private/dxchart5-modules/dist/studies/studies.config';
import { ChartWithExecutedOrders } from '@dx-private/dxchart5-modules/dist/executed-orders/executed-orders.config';
import { PartialFullChartCoreConfig } from '../../../config/chart-config';
export type ChartWithModules = Chart & ChartWithDrawings & ChartWithStudies & ChartWithEquivolume & ChartWithHeikinAshi & ChartWithNews & ChartWithExecutedOrders;
export declare const createChartWithModules: (element: HTMLElement, userConfig?: PartialFullChartCoreConfig) => ChartWithModules;
