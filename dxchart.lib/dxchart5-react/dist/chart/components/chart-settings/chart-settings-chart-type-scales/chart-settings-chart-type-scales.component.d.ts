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
import { YAxisAlign } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { FitType } from '@devexperts/dxcharts-lite/dist/chart/bootstrap';
import { PriceAxisType } from '@devexperts/dxcharts-lite/dist/chart/components/labels_generator/numeric-axis-labels.generator';
import { Lazy } from 'fp-ts/function';
import React from 'react';
import { Localization } from '../../../../config/localization/localization';
import { ChartSettings } from '../../../model/chart.model';
import { LabelMode, LabelType, YAxisLabelConfig } from '../../../view-models/y-axis/y-axis-configurator.view-model';
interface ChartSettingsChartTypeScalesProps {
    readonly localization: Localization;
    readonly config: ChartSettings;
    readonly onRestoreDefaultRequest: Lazy<void>;
    readonly changeFitType: (type: FitType, active: boolean) => void;
    readonly toggleAutoScale: (active: boolean) => void;
    readonly setAxisType: (type: PriceAxisType) => void;
    readonly togglePriceScaleInverse: () => void;
    readonly setAxisAlign: (align: YAxisAlign) => void;
    readonly toggleLockPriceToBarRatio: () => void;
    readonly labelsConfig: YAxisLabelConfig;
    readonly setLabelMode: (type: LabelType, mode: LabelMode) => void;
    readonly selectCountDownBarClose: (value: boolean) => void;
    readonly selectDescription: (value: boolean) => void;
    readonly yAxisDict: Localization['yAxis'];
    readonly showRestoreToDefault: boolean;
}
export declare const ChartSettingsChartTypeScales: React.NamedExoticComponent<ChartSettingsChartTypeScalesProps>;
export default ChartSettingsChartTypeScales;
