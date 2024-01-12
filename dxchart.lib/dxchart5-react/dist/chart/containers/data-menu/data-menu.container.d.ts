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
/// <reference types="react" />
import { ChartConfiguratorViewModel } from '../../view-models/chart-configurator.view-model';
import { ChartReactConfig } from '../../../config/chart-react-config';
export declare const DataMenuContainer: import("../../../context/context2").Context<Record<"chart", import("../../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"chartTypeViewModel", import("../../view-models/chart-type.view-model").ChartTypeViewModel> & Record<"compareChartViewModel", import("../../view-models/data/compare-chart.view-model").CompareChartViewModel> & Record<"tradingVM", import("../../view-models/trading/trading.view-model").TradingViewModel> & Record<"tradingCoreVM", import("../../view-models/trading/trading-core.view-model").TradingCoreViewModel> & Record<"chartConfiguratorViewModel", ChartConfiguratorViewModel> & Record<"dynamicObjectsVM", import("../../view-models/dynamic-objects.view-model").DynamicObjectsViewModel> & Record<"orderEntryVM", import("../../view-models/trading/order-entry.view-model").OrderEntryViewModel> & Record<"colorPalette", string[]> & Record<"chartReactConfig", ChartReactConfig>, () => import("react").FunctionComponentElement<import("../../components/data-menu/data-menu.component").DataMenuProps> | null>;
