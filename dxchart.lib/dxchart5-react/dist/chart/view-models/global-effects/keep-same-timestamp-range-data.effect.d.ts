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
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { ChartConfiguratorViewModel } from '../chart-configurator.view-model';
import { TimeFrameViewModel } from '../timeframe.view-model';
import { MultiChartViewModel } from '../multi-chart.view-model';
/**
 * Keep same timestamp range on change data settings (extended hours, price type)
 */
export declare const keepSameTimestampRangeOnDataEffect: import("../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"timeFrameViewModel", TimeFrameViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"multiChartViewModel", MultiChartViewModel>, import("rxjs").Observable<import("../timeframe.view-model").TimeFrame>>;
