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
import React from 'react';
import { ChartReactConfig } from '../../config/chart-react-config';
import { ChartReactApiVM } from '../view-models/api/chart-react-api.view-model';
import { InitialLoaderVM } from '../view-models/loading/initial-loader.vm';
export declare const ChartToolbarDefaultButtons: import("../../context/context2").Context<Record<"aggregationPeriodViewModel", import("../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"drawingViewModel", import("../view-models/drawings/drawing.view-model").ChartDrawingViewModel> & Record<"chartConfiguratorViewModel", import("../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chart", import("../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"localization", import("../../config/localization/localization").Localization> & Record<"chartTypeViewModel", import("../view-models/chart-type.view-model").ChartTypeViewModel> & Record<"chartReactConfig", ChartReactConfig> & Omit<Record<"localInstrumentStore", import("../stores/instrument.store").LocalInstrumentStore> & Record<"symbolSuggestProvider", import("../../providers/symbol-suggest-provider").SymbolSuggestProvider> & Record<"chartId", string>, "chartId"> & Record<"compareChartViewModel", import("../view-models/data/compare-chart.view-model").CompareChartViewModel> & Record<"chartDataViewModel", import("../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"dxScriptEditViewModel", import("../view-models/dx-script-edit.view-model").DxScriptEditViewModel> & Record<"studiesSettingsViewModel", import("../view-models/studies/studies-settings.view-model").StudiesSettingsViewModel> & Record<"colorPalette", string[]> & Record<"indicatorsTemplateVM", import("../view-models/studies/indicator-template.view-model").IndicatorTemplateViewModel> & Record<"multiChartViewModel", import("../view-models/multi-chart.view-model").MultiChartViewModel> & Record<"layoutViewModel", import("../view-models/layout.view-model").LayoutViewModel> & Record<"chartLayersViewModel", import("../view-models/layers/chart-layers.view-model").ChartLayersViewModel> & Record<"userDataViewModel", import("../view-models/user-data.view-model").UserDataViewModel> & Record<"snapshotSharingVM", import("../view-models/snapshot/chart-snapshot.view-model").ChartSnapshotViewModel> & Record<"chartReactApiViewModel", ChartReactApiVM> & Record<"themeViewModel", import("../view-models/theme.view-model").ThemeViewModel> & Record<"initialChartTheme", string> & Record<"yAxisConfiguratorViewModel", import("../view-models/y-axis/y-axis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"chartConfig", import("../../config/chart-config").FullChartCoreConfig> & Record<"chartId", string>, {
    ChartAggregationPeriodDropdownContainer: React.FC<Record<string, any>>;
    ChartScalingToolContainer: React.FC<Record<string, any>>;
    ChartTypeDropdownContainer: React.FC<Record<string, any>>;
    DrawingsSelectorContainer: React.FC<Record<string, any>>;
    CompareChartSelectorContainer: React.FC<Record<string, any>>;
    StudiesSettingsContainer: React.FC<Record<string, any>>;
    IndicatorTemplatesDropdownContainer: React.FunctionComponent<{}> | (() => React.FunctionComponentElement<{
        children?: React.ReactNode;
    }>);
    MultiChartSettingsButton: React.FunctionComponent<{}> | (() => React.FunctionComponentElement<{
        children?: React.ReactNode;
    }>);
    ChartLayoutDropdownContainer: React.FunctionComponent<{}> | (() => React.FunctionComponentElement<{
        children?: React.ReactNode;
    }>);
    ChartLayersPopoverContainer: React.FunctionComponent<{}> | (() => React.FunctionComponentElement<{
        children?: React.ReactNode;
    }>);
    ExportButtonContainer: React.FunctionComponent<{}> | (() => React.FunctionComponentElement<{
        children?: React.ReactNode;
    }>);
    ChartSnapshotDropdownContainer: React.FC<Record<string, any>>;
    ChartSettingsContainer: React.FC<Record<string, any>>;
    MaximizeChartButtonContainer: React.FC<Record<string, any>>;
}>;
export declare const ChartToolbarContainer: import("../../context/context2").Context<Record<"chartDataViewModel", import("../view-models/data/chart-data.view-model").ChartDataViewModel> & Record<"instrumentSelectorViewModel", import("../view-models/instrument-selector.view-model").InstrumentSelectorViewModel> & Record<"chartReactConfig", ChartReactConfig> & Record<"aggregationPeriodViewModel", import("../view-models/aggregation-period.view-model").AggregationPeriodViewModel> & Record<"drawingViewModel", import("../view-models/drawings/drawing.view-model").ChartDrawingViewModel> & Record<"chartConfiguratorViewModel", import("../view-models/chart-configurator.view-model").ChartConfiguratorViewModel> & Record<"chart", import("../components/canvas-chart-renderer/chart-with-modules").ChartWithModules> & Record<"localization", import("../../config/localization/localization").Localization> & Record<"chartTypeViewModel", import("../view-models/chart-type.view-model").ChartTypeViewModel> & Omit<Record<"localInstrumentStore", import("../stores/instrument.store").LocalInstrumentStore> & Record<"symbolSuggestProvider", import("../../providers/symbol-suggest-provider").SymbolSuggestProvider> & Record<"chartId", string>, "chartId"> & Record<"compareChartViewModel", import("../view-models/data/compare-chart.view-model").CompareChartViewModel> & Record<"dxScriptEditViewModel", import("../view-models/dx-script-edit.view-model").DxScriptEditViewModel> & Record<"studiesSettingsViewModel", import("../view-models/studies/studies-settings.view-model").StudiesSettingsViewModel> & Record<"colorPalette", string[]> & Record<"indicatorsTemplateVM", import("../view-models/studies/indicator-template.view-model").IndicatorTemplateViewModel> & Record<"multiChartViewModel", import("../view-models/multi-chart.view-model").MultiChartViewModel> & Record<"layoutViewModel", import("../view-models/layout.view-model").LayoutViewModel> & Record<"chartLayersViewModel", import("../view-models/layers/chart-layers.view-model").ChartLayersViewModel> & Record<"userDataViewModel", import("../view-models/user-data.view-model").UserDataViewModel> & Record<"snapshotSharingVM", import("../view-models/snapshot/chart-snapshot.view-model").ChartSnapshotViewModel> & Record<"chartReactApiViewModel", ChartReactApiVM> & Record<"themeViewModel", import("../view-models/theme.view-model").ThemeViewModel> & Record<"initialChartTheme", string> & Record<"yAxisConfiguratorViewModel", import("../view-models/y-axis/y-axis-configurator.view-model").YAxisConfiguratorViewModel> & Record<"chartConfig", import("../../config/chart-config").FullChartCoreConfig> & Record<"chartId", string> & Record<"initialLoaderVM", InitialLoaderVM>, React.FunctionComponent<{}> | (() => React.FunctionComponentElement<{
    children?: React.ReactNode;
}>)>;
