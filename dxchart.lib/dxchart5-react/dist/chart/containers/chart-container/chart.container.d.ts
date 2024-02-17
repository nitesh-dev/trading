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
import React from 'react';
import { ChartWithModules } from '../../components/canvas-chart-renderer/chart-with-modules';
import { DataLoaderVM } from '../../view-models/loading/data-loader.vm';
import { MultiChartViewModel } from '../../view-models/multi-chart.view-model';
import { ChartReactConfig } from '../../../config/chart-react-config';
import { ActionsHistoryVM } from '../../view-models/actions/actions-history.vm';
/**
 * Composes all containers for chart. Renders single chart and utility containers.
 * Requires view-models to function properly.
 */
export declare const ChartContainer: import("../../../context/context2").Context<Record<"chart", ChartWithModules> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chartTypeViewModel", import("../../view-models/chart-type.view-model").ChartTypeViewModel> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"timeFrameViewModel", import("../../view-models/timeframe.view-model").TimeFrameViewModel> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"timeframePresetsViewModel", import("../../view-models/timeframe-presets.view-model").TimeframePresetsViewModel> & Record<"notificationVM", import("../../view-models/notification.view-model").NotificationViewModel> & Record<"drawingViewModel", import("../../view-models/drawings/drawing.view-model").ChartDrawingViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartId", string> & Record<"chartReactConfig", ChartReactConfig> & Record<"chartLegendVM", import("../../view-models/chart-legend/chart-legend.view-model").ChartLegendViewModel> & Record<"themeViewModel", import("../../view-models/theme.view-model").ThemeViewModel> & Record<"compareChartViewModel", import("../../view-models/data/compare-chart.view-model").CompareChartViewModel> & Record<"tradingVM", import("../../view-models/trading/trading.view-model").TradingViewModel> & Record<"tradingCoreVM", import("../../view-models/trading/trading-core.view-model").TradingCoreViewModel> & Record<"dynamicObjectsVM", import("../../view-models/dynamic-objects.view-model").DynamicObjectsViewModel> & Record<"orderEntryVM", import("../../view-models/trading/order-entry.view-model").OrderEntryViewModel> & Record<"dxScriptEditViewModel", import("../../view-models/dx-script-edit.view-model").DxScriptEditViewModel> & Record<"localization", import("../../../config/localization/localization").Localization> & Record<"studiesSettingsViewModel", import("../../view-models/studies/studies-settings.view-model").StudiesSettingsViewModel> & Record<"colorPalette", string[]> & Record<"initialLoaderVM", import("../../view-models/loading/initial-loader.vm").InitialLoaderVM> & Record<"dataLoaderVM", DataLoaderVM> & Record<"eventsDataProvider", import("../../../providers/events-data-provider").EventsDataProvider> & Record<"yAxisConfiguratorViewModel", import("../../view-models/y-axis/y-axis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"timeZoneViewModel", import("../../view-models/time-zone.view-model").TimeZoneViewModel> & Record<"newsViewModel", import("../../view-models/news/news.view-model").NewsViewModel> & Record<"chartPaneViewModel", import("../../view-models/chart-pane.view-model").ChartPaneViewModel> & Record<"chartSessionsViewModel", import("../../view-models/chart-sessions.view-model").ChartSessionsViewModel> & Record<"executedOrdersVM", import("../../view-models/trading/executed-orders.view-model").ExecutedOrdersViewModel> & Record<"actionsHistoryVM", ActionsHistoryVM>, React.FC<Record<string, any>>>;
export default ChartContainer;
