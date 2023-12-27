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
import { option } from 'fp-ts';
import { Option } from 'fp-ts/Option';
import React from 'react';
import { ChartReactConfig } from '../../../config/chart-react-config';
import { Localization } from '../../../config/localization/localization';
import { TimezonesConfig } from '../../../utils/timezones/timezone.model';
import { ViewModels } from '../../containers/toolbar-and-chart-view-models.creator';
import { MultiChartLayoutType } from '../../model/multichart.model';
import { TimeframePresetsList } from '../../model/timeframe-presets.model';
import { DxScriptEditViewModel } from '../../view-models/dx-script-edit.view-model';
import { LayoutViewModel } from '../../view-models/layout.view-model';
import { MultiChartViewModel } from '../../view-models/multi-chart.view-model';
import { TimeZoneViewModel } from '../../view-models/time-zone.view-model';
import { TimeframePresetsViewModel } from '../../view-models/timeframe-presets.view-model';
import { ChartWithModules } from '../canvas-chart-renderer/chart-with-modules';
import { FullChartCoreConfig } from '../../../config/chart-config';
export interface CombinedViewModels extends ViewModels {
    readonly timeframePresetsViewModel: TimeframePresetsViewModel;
    readonly timezoneViewModel: TimeZoneViewModel;
}
export interface MultiChartProps {
    readonly multiChartLayout: MultiChartLayoutType;
    readonly maximizedChartId: Option<string>;
    readonly className?: string;
}
/**
 * Renders main chart containers - toolbar, sidebar and chart.
 * Manages multi-chart rendering logic.
 */
export declare const MultiChartComponent: import("../../../context/context2").Context<Omit<Record<"chartDataProvider", import("../../../providers/chart-data-provider").ChartDataProvider> & Record<"symbolSuggestProvider", import("../../../providers/symbol-suggest-provider").SymbolSuggestProvider> & Record<"eventsDataProvider", import("../../../providers/events-data-provider").EventsDataProvider> & Record<"dxScriptRunner", import("../../../providers/dx-script-provider").DxScriptRunner> & Record<"dxScriptProvider", import("../../../providers/dx-script-provider").DxScriptProvider> & Record<"dxStudiesProvider", import("../../../providers/studies/dx-studies-provider").DxStudiesProvider> & Record<"tradingSessionsProvider", import("../../../providers/sessions/trading-sessions-provider").TradingSessionsProvider> & Record<"orderProvider", import("../../../providers/trading/order.provider").OrderProvider> & Record<"positionProvider", import("../../../providers/trading/position.provider").PositionProvider> & Record<"chartSharingProvider", import("../../../providers/chart-sharing-provider").ChartSharingProvider> & Record<"indicatorsTemplateProvider", import("../../../providers/indicator-templates-provider").IndicatorsTemplateProvider> & Record<"userDataProvider", import("../../../providers/user-data-provider").UserDataProvider> & Record<"layoutProvider", import("../../../providers/layout-provider").LayoutProvider> & Omit<Record<"multiChartDataService", import("../../services/multichart-data.service").MultiChartDataService> & Record<"utilityDataService", import("../../services/utility-data.service").UtilityDataService> & Record<"chart", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"actionsHistoryVM", import("../../view-models/actions/actions-history.vm").ActionsHistoryVM> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"instrumentSelectorViewModel", import("../../view-models/instrument-selector.view-model").InstrumentSelectorViewModel> & Record<"dataLoaderVM", import("../../view-models/loading/data-loader.vm").DataLoaderVM> & Record<"initialLoaderVM", import("../../view-models/loading/initial-loader.vm").InitialLoaderVM> & Record<"initialInstrument", option.Option<string>> & Record<"initialExtendedHours", boolean> & Record<"initialPriceType", "last" | "mark" | "bid" | "ask"> & Record<"chartId", string> & Record<"notificationVM", import("../../view-models/notification.view-model").NotificationViewModel> & Record<"localization", Localization>, "initialInstrument" | "instrumentSelectorViewModel" | "initialExtendedHours" | "initialPriceType" | "aggregationPeriodViewModel" | "dataLoaderVM"> & Record<"chart", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartId", string> & Record<"localInstrumentStore", import("../../stores/instrument.store").LocalInstrumentStore> & Record<"actionsHistoryVM", import("../../view-models/actions/actions-history.vm").ActionsHistoryVM> & Omit<Record<"userDataViewModel", import("../../view-models/user-data.view-model").UserDataViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"actionsHistoryVM", import("../../view-models/actions/actions-history.vm").ActionsHistoryVM> & Record<"initialAggregationPeriod", import("../../model/aggregation.model").AggregationPeriod> & Record<"localization", Localization> & Record<"chartId", string>, "initialAggregationPeriod"> & Omit<Record<"chart", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"chartTypeViewModel", import("../../view-models/chart-type.view-model").ChartTypeViewModel> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chartConfig", FullChartCoreConfig> & Record<"themeViewModel", import("../../view-models/theme.view-model").ThemeViewModel> & Record<"actionsHistoryVM", import("../../view-models/actions/actions-history.vm").ActionsHistoryVM> & Record<"notificationVM", import("../../view-models/notification.view-model").NotificationViewModel> & Record<"localization", Localization> & Record<"chartReactConfig", ChartReactConfig> & Record<"initialChartReactSettings", import("../../model/chart.model").ChartReactSettings> & Record<"initialChartSettings", import("../../model/chart.model").ChartSettings> & Record<"chartId", string>, "chartId" | "aggregationPeriodViewModel" | "chartDataViewModel" | "chartTypeViewModel" | "initialChartSettings"> & Omit<Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"actionsHistoryVM", import("../../view-models/actions/actions-history.vm").ActionsHistoryVM> & Record<"chart", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"initialGeneralSettings", import("../../model/chart.model").ChartSettings> & Record<"chartId", string> & Record<"chartConfig", FullChartCoreConfig>, "chartId" | "chartDataViewModel" | "chartConfiguratorViewModel" | "initialGeneralSettings"> & Omit<Record<"chart", ChartWithModules> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"initialCompareInstruments", import("../../model/chart.model").CompareInstrument[]> & Record<"instrumentSelectorViewModel", import("../../view-models/instrument-selector.view-model").InstrumentSelectorViewModel> & Record<"chartId", string>, "instrumentSelectorViewModel" | "chartDataViewModel" | "initialCompareInstruments"> & Omit<Record<"chart", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"studiesDataProvider", import("../../../providers/studies/studies-data-provider").StudiesDataProvider> & Record<"dxScriptEditViewModel", DxScriptEditViewModel> & Record<"dxStudiesProvider", import("../../../providers/studies/dx-studies-provider").DxStudiesProvider> & Record<"actionsHistoryVM", import("../../view-models/actions/actions-history.vm").ActionsHistoryVM> & Record<"chartReactConfig", ChartReactConfig> & Record<"localization", Localization> & Record<"chartId", string>, "chartId" | "chartConfiguratorViewModel" | "dxScriptEditViewModel" | "studiesDataProvider"> & Omit<Record<"chart", ChartWithModules> & Record<"actionsHistoryVM", import("../../view-models/actions/actions-history.vm").ActionsHistoryVM> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartTypesConfig", import("../../model/chart.model").ChartTypesConfig> & Record<"initialChartType", "line" | "area" | "trend" | "heikinAshi" | "candle" | "bar" | "scatterPlot" | "hollow" | "histogram" | "baseline" | "equivolume"> & Record<"chartId", string>, "chartId" | "initialChartType"> & Omit<Record<"chart", ChartWithModules> & Record<"iconsPool", Readonly<Record<string, import("../../../config/icons-pool").IconDefinition>>> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"notificationVM", import("../../view-models/notification.view-model").NotificationViewModel> & Record<"localization", Localization> & Record<"userDataViewModel", import("../../view-models/user-data.view-model").UserDataViewModel> & Record<"actionsHistoryVM", import("../../view-models/actions/actions-history.vm").ActionsHistoryVM> & Record<"initialDrawings", Record<string, import("@dx-private/dxchart5-modules/dist/drawings/drawings.config").Drawing<"text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "line" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "path" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "ellipse" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter">[]>> & Record<"availableDrawings", readonly ("text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "line" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "path" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "ellipse" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter")[]> & Record<"initialConfig", import("../../model/drawing.model").DrawingsConfig<"text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "line" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "path" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "ellipse" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter">> & Record<"chartId", string> & Record<"chartReactConfig", ChartReactConfig> & Record<"drawingSyncVM", import("../../view-models/drawings/drawing-sync.vm").MultichartDrawingSyncVM> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"dataLoaderVM", import("../../view-models/loading/data-loader.vm").DataLoaderVM>, "chartId" | "dataLoaderVM" | "chartDataViewModel" | "initialDrawings" | "availableDrawings" | "initialConfig"> & Omit<Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chart", ChartWithModules> & Record<"tradingSessionsProvider", import("../../../providers/sessions/trading-sessions-provider").TradingSessionsProvider>, "aggregationPeriodViewModel" | "chartDataViewModel" | "chartConfiguratorViewModel"> & Omit<Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"compareChartViewModel", import("../../view-models/data/compare-chart.view-model").CompareChartViewModel> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"studiesSettingsViewModel", import("../../view-models/studies/studies-settings.view-model").StudiesSettingsViewModel> & Record<"chartTypeViewModel", import("../../view-models/chart-type.view-model").ChartTypeViewModel> & Record<"chart", ChartWithModules> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chartReactConfig", ChartReactConfig>, "aggregationPeriodViewModel" | "chartDataViewModel" | "chartTypeViewModel" | "chartConfiguratorViewModel" | "studiesSettingsViewModel" | "compareChartViewModel"> & Omit<Record<"chartId", string> & Record<"drawingViewModel", import("../../view-models/drawings/drawing.view-model").ChartDrawingViewModel> & Record<"chart", ChartWithModules> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"initialLayerItems", Record<string, import("../../model/chart-layers.model").LayerItem[]>> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"localization", Localization>, "chartDataViewModel" | "drawingViewModel" | "initialLayerItems"> & Omit<Record<"chartLayersViewModel", import("../../view-models/layers/chart-layers.view-model").ChartLayersViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"drawingViewModel", import("../../view-models/drawings/drawing.view-model").ChartDrawingViewModel> & Record<"localization", Localization> & Record<"chartReactConfig", ChartReactConfig> & Record<"initialSelectedGroup", string | undefined> & Record<"chartId", string>, "chartId" | "chartDataViewModel" | "drawingViewModel" | "chartLayersViewModel" | "initialSelectedGroup"> & Record<"chartReactConfig", ChartReactConfig> & Record<"drawingsConfig", import("../../model/drawing.model").DrawingsConfig<"text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "line" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "path" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "ellipse" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter">> & Record<"dxScriptEditViewModel", DxScriptEditViewModel> & Omit<Record<"newsDataProvider", import("../../../providers/news-data-provider").NewsDataProvider> & Record<"chart", ChartWithModules> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel>, "chartDataViewModel" | "chartConfiguratorViewModel"> & Omit<Record<"multiChartViewModel", MultiChartViewModel> & Record<"chart", ChartWithModules> & Record<"chartId", string>, "chartId"> & Omit<Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chart", ChartWithModules> & Omit<Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chart", ChartWithModules> & Record<"chartReactConfig", ChartReactConfig> & Record<"tradingCoreViewModel", import("../../view-models/trading/trading-core.view-model").TradingCoreViewModel> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"dataLoaderVM", import("../../view-models/loading/data-loader.vm").DataLoaderVM> & Record<"themeViewModel", import("../../view-models/theme.view-model").ThemeViewModel>, "tradingCoreViewModel"> & Omit<Record<"chart", ChartWithModules> & Record<"orderProvider", import("../../../providers/trading/order.provider").OrderProvider> & Record<"positionProvider", import("../../../providers/trading/position.provider").PositionProvider> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"orderEntryViewModel", import("../../view-models/trading/order-entry.view-model").OrderEntryViewModel> & Record<"tradingCoreViewModel", import("../../view-models/trading/trading-core.view-model").TradingCoreViewModel> & Record<"yAxisConfiguratorViewModel", import("../../view-models/y-axis/y-axis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chartId", string>, "tradingCoreViewModel" | "orderEntryViewModel"> & Record<"orderProvider", import("../../../providers/trading/order.provider").OrderProvider> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel>, "dataLoaderVM" | "chartDataViewModel" | "chartConfiguratorViewModel" | "yAxisConfiguratorViewModel"> & Omit<Record<"chart", ChartWithModules> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chartId", string>, "chartConfiguratorViewModel">, "chartId" | "chart" | "dxScriptEditViewModel"> & Omit<Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"instrumentSelectorViewModel", import("../../view-models/instrument-selector.view-model").InstrumentSelectorViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"drawingViewModel", import("../../view-models/drawings/drawing.view-model").ChartDrawingViewModel> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chart", ChartWithModules> & Record<"localization", Localization> & Record<"chartTypeViewModel", import("../../view-models/chart-type.view-model").ChartTypeViewModel> & Omit<Record<"localInstrumentStore", import("../../stores/instrument.store").LocalInstrumentStore> & Record<"symbolSuggestProvider", import("../../../providers/symbol-suggest-provider").SymbolSuggestProvider> & Record<"chartId", string>, "chartId"> & Record<"compareChartViewModel", import("../../view-models/data/compare-chart.view-model").CompareChartViewModel> & Record<"dxScriptEditViewModel", DxScriptEditViewModel> & Record<"studiesSettingsViewModel", import("../../view-models/studies/studies-settings.view-model").StudiesSettingsViewModel> & Record<"colorPalette", string[]> & Record<"indicatorsTemplateVM", import("../../view-models/studies/indicator-template.view-model").IndicatorTemplateViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"layoutViewModel", LayoutViewModel> & Record<"chartLayersViewModel", import("../../view-models/layers/chart-layers.view-model").ChartLayersViewModel> & Record<"userDataViewModel", import("../../view-models/user-data.view-model").UserDataViewModel> & Record<"snapshotSharingVM", import("../../view-models/snapshot/chart-snapshot.view-model").ChartSnapshotViewModel> & Record<"chartReactApiViewModel", import("../../view-models/api/chart-react-api.view-model").ChartReactApiVM> & Record<"themeViewModel", import("../../view-models/theme.view-model").ThemeViewModel> & Record<"initialChartTheme", string> & Record<"yAxisConfiguratorViewModel", import("../../view-models/y-axis/y-axis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"chartConfig", FullChartCoreConfig> & Record<"chartId", string> & Record<"initialLoaderVM", import("../../view-models/loading/initial-loader.vm").InitialLoaderVM>, "chartId" | "instrumentSelectorViewModel" | "chart" | "aggregationPeriodViewModel" | "chartDataViewModel" | "chartTypeViewModel" | "chartConfiguratorViewModel" | "drawingViewModel" | "yAxisConfiguratorViewModel" | "chartLayersViewModel" | "dxScriptEditViewModel" | "studiesSettingsViewModel" | "indicatorsTemplateVM" | "compareChartViewModel" | "snapshotSharingVM" | "chartReactApiViewModel"> & Omit<Record<"drawingViewModel", import("../../view-models/drawings/drawing.view-model").ChartDrawingViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"userDataViewModel", import("../../view-models/user-data.view-model").UserDataViewModel> & Record<"drawingSyncVM", import("../../view-models/drawings/drawing-sync.vm").MultichartDrawingSyncVM> & Record<"chartReactConfig", ChartReactConfig>, "drawingViewModel"> & Omit<Record<"chart", ChartWithModules> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"chartTypeViewModel", import("../../view-models/chart-type.view-model").ChartTypeViewModel> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"timeFrameViewModel", import("../../view-models/timeframe.view-model").TimeFrameViewModel> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"timeframePresetsViewModel", TimeframePresetsViewModel> & Record<"notificationVM", import("../../view-models/notification.view-model").NotificationViewModel> & Record<"drawingViewModel", import("../../view-models/drawings/drawing.view-model").ChartDrawingViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"chartId", string> & Record<"chartReactConfig", ChartReactConfig> & Record<"chartLegendVM", import("../../view-models/chart-legend/chart-legend.view-model").ChartLegendViewModel> & Record<"themeViewModel", import("../../view-models/theme.view-model").ThemeViewModel> & Record<"compareChartViewModel", import("../../view-models/data/compare-chart.view-model").CompareChartViewModel> & Record<"tradingVM", import("../../view-models/trading/trading.view-model").TradingViewModel> & Record<"tradingCoreVM", import("../../view-models/trading/trading-core.view-model").TradingCoreViewModel> & Record<"dynamicObjectsVM", import("../../view-models/dynamic-objects.view-model").DynamicObjectsViewModel> & Record<"orderEntryVM", import("../../view-models/trading/order-entry.view-model").OrderEntryViewModel> & Record<"dxScriptEditViewModel", DxScriptEditViewModel> & Record<"localization", Localization> & Record<"studiesSettingsViewModel", import("../../view-models/studies/studies-settings.view-model").StudiesSettingsViewModel> & Record<"colorPalette", string[]> & Record<"initialLoaderVM", import("../../view-models/loading/initial-loader.vm").InitialLoaderVM> & Record<"dataLoaderVM", import("../../view-models/loading/data-loader.vm").DataLoaderVM> & Record<"eventsDataProvider", import("../../../providers/events-data-provider").EventsDataProvider> & Record<"yAxisConfiguratorViewModel", import("../../view-models/y-axis/y-axis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"timeZoneViewModel", TimeZoneViewModel> & Record<"newsViewModel", import("../../view-models/news/news.view-model").NewsViewModel> & Record<"chartPaneViewModel", import("../../view-models/chart-pane.view-model").ChartPaneViewModel> & Record<"chartSessionsViewModel", import("../../view-models/chart-sessions.view-model").ChartSessionsViewModel> & Record<"executedOrdersVM", import("../../view-models/trading/executed-orders.view-model").ExecutedOrdersViewModel>, "chartId" | "chart" | "aggregationPeriodViewModel" | "dataLoaderVM" | "chartDataViewModel" | "chartTypeViewModel" | "chartConfiguratorViewModel" | "drawingViewModel" | "yAxisConfiguratorViewModel" | "chartSessionsViewModel" | "timeZoneViewModel" | "timeframePresetsViewModel" | "studiesSettingsViewModel" | "compareChartViewModel" | "chartLegendVM" | "chartPaneViewModel" | "timeFrameViewModel" | "newsViewModel" | "tradingVM" | "tradingCoreVM" | "orderEntryVM" | "executedOrdersVM" | "dynamicObjectsVM"> & Omit<Record<"colorsViewModel", import("../../view-models/colors.view-model").ColorsViewModel>, "colorsViewModel"> & Record<"userDataViewModel", import("../../view-models/user-data.view-model").UserDataViewModel> & Record<"colorPalette", string[]> & Omit<Record<"initialLoaderVM", import("../../view-models/loading/initial-loader.vm").InitialLoaderVM> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"drawingSyncVM", import("../../view-models/drawings/drawing-sync.vm").MultichartDrawingSyncVM> & Record<"themeViewModel", import("../../view-models/theme.view-model").ThemeViewModel> & Record<"actionsHistoryVM", import("../../view-models/actions/actions-history.vm").ActionsHistoryVM> & Record<"onApiCreated", import("../../view-models/api/chart-react-api.view-model").ChartReactAPICreatedCB> & Record<"notificationVM", import("../../view-models/notification.view-model").NotificationViewModel> & Record<"snapshotSharingVM", import("../../view-models/snapshot/chart-snapshot.view-model").ChartSnapshotViewModel> & Record<"layoutViewModel", LayoutViewModel> & Record<"layoutProvider", import("../../../providers/layout-provider").LayoutProvider> & Record<"dxStudiesProvider", import("../../../providers/studies/dx-studies-provider").DxStudiesProvider> & Record<"chartReactConfig", ChartReactConfig> & Record<"timezones", TimezonesConfig>, "snapshotSharingVM"> & Record<"dxScriptEditViewModel", DxScriptEditViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"layoutViewModel", LayoutViewModel> & Record<"localization", Localization> & Record<"initialTimeframePresets", TimeframePresetsList> & Omit<Record<"multiChartDataService", import("../../services/multichart-data.service").MultiChartDataService> & Record<"chart", ChartWithModules> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"initialTimeframePresets", TimeframePresetsList> & Record<"userDataViewModel", import("../../view-models/user-data.view-model").UserDataViewModel> & Record<"chartId", string> & Record<"chartSessionsViewModel", import("../../view-models/chart-sessions.view-model").ChartSessionsViewModel> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"multiChartViewModel", MultiChartViewModel>, "chartId" | "chart" | "aggregationPeriodViewModel" | "chartConfiguratorViewModel" | "initialTimeframePresets" | "chartSessionsViewModel"> & Omit<Record<"timeZoneViewModel", TimeZoneViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"timeframePresetsViewModel", TimeframePresetsViewModel> & Record<"chartConfiguratorViewModel", import("../../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"yAxisConfiguratorViewModel", import("../../view-models/y-axis/y-axis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"localization", Localization> & Record<"drawingGroupsViewModel", import("../../view-models/layers/drawing-groups.view-model").DrawingGroupsViewModel> & Record<"chartLayersViewModel", import("../../view-models/layers/chart-layers.view-model").ChartLayersViewModel>, "multiChartViewModel" | "chartConfiguratorViewModel" | "yAxisConfiguratorViewModel" | "chartLayersViewModel" | "drawingGroupsViewModel" | "timeZoneViewModel" | "timeframePresetsViewModel"> & Omit<Record<"localization", Localization> & Record<"charts", ChartWithModules[]> & Record<"chartLegendVMs", import("../../view-models/chart-legend/chart-legend.view-model").ChartLegendViewModel[]> & Record<"periodVMs", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel[]> & Record<"notificationVM", import("../../view-models/notification.view-model").NotificationViewModel> & Record<"chartSharingProvider", import("../../../providers/chart-sharing-provider").ChartSharingProvider> & Omit<Record<"chart", ChartWithModules> & Record<"chartLegendVM", import("../../view-models/chart-legend/chart-legend.view-model").ChartLegendViewModel> & Record<"localization", Localization> & Record<"palette", import("../../../config/theme/chart-palette").ChartAppPalette> & Record<"themeViewModel", import("../../view-models/theme.view-model").ThemeViewModel> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel>, "chart" | "aggregationPeriodViewModel" | "chartLegendVM"> & Record<"snapshotCanvasRef", React.RefObject<HTMLCanvasElement>> & Record<"multiChartViewModel", MultiChartViewModel>, "charts" | "chartLegendVMs" | "periodVMs" | "snapshotCanvasRef"> & Omit<Record<"multiChartViewModel", MultiChartViewModel> & Record<"indicatorsTemplateProvider", import("../../../providers/indicator-templates-provider").IndicatorsTemplateProvider> & Record<"dxStudiesProvider", import("../../../providers/studies/dx-studies-provider").DxStudiesProvider> & Record<"studiesSettingsVMs", import("../../view-models/studies/studies-settings.view-model").StudiesSettingsViewModel[]> & Record<"localization", Localization>, "multiChartViewModel" | "studiesSettingsVMs"> & Record<"notificationVM", import("../../view-models/notification.view-model").NotificationViewModel> & Omit<Record<"chart", ChartWithModules> & Record<"chartDataViewModel", import("../../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"localization", Localization> & Record<"multiChartViewModel", MultiChartViewModel> & Record<"aggregationPeriodViewModel", import("../../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"initialTimezones", Promise<import("@devexperts/dxcharts-lite/dist/chart/model/time-zone.model").TimeZone[]>> & Record<"tradingSessionsProvider", import("../../../providers/sessions/trading-sessions-provider").TradingSessionsProvider>, "localization" | "chart" | "multiChartViewModel" | "aggregationPeriodViewModel" | "chartDataViewModel" | "initialTimezones"> & Record<"timezones", TimezonesConfig> & Record<"chartReactConfig", ChartReactConfig> & Record<"chartConfig", FullChartCoreConfig>, React.NamedExoticComponent<MultiChartProps>>;
export default MultiChartComponent;