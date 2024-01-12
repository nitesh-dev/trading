/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DeepPartial } from '@devexperts/dxcharts-lite/dist/chart/utils/object.utils';
import { FullChartColorsDrawings, FullChartConfigDrawings } from '@dx-private/dxchart5-modules/dist/drawings/drawings.config';
import { FullChartColorsEquivolume, FullChartConfigEquivolume } from '@dx-private/dxchart5-modules/dist/equivolume/EquivolumeConfig';
import { FullChartColorsNews, FullChartConfigNews } from '@dx-private/dxchart5-modules/dist/news/news.config';
import { FullChartColorsStudies, FullChartConfigStudies } from '@dx-private/dxchart5-modules/dist/studies/studies.config';
import { FullChartColorsExecutedOrders, FullChartConfigExecutedOrders } from '@dx-private/dxchart5-modules/dist/executed-orders/executed-orders.config';
import { FullChartCoreConfig, PartialFullChartCoreConfig } from '../../../config/chart-config';
export type FullChartColorsWithModules = FullChartColorsDrawings & FullChartColorsStudies & FullChartColorsEquivolume & FullChartColorsNews & FullChartColorsExecutedOrders;
export type PartialChartConfigWithModules = DeepPartial<FullChartConfigWithModules>;
export type FullChartConfigWithModules = FullChartConfigDrawings & FullChartConfigStudies & FullChartConfigEquivolume & FullChartConfigNews & FullChartConfigExecutedOrders;
export declare const mergeFullChartConfig: (config: PartialFullChartCoreConfig, defaultConfig?: FullChartCoreConfig) => FullChartCoreConfig;
