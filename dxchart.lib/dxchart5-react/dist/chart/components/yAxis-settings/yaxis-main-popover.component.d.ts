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
import { FitType } from '@devexperts/dxcharts-lite/dist/chart/bootstrap';
import { YAxisAlign } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { PriceAxisType } from '@devexperts/dxcharts-lite/dist/chart/components/labels_generator/numeric-axis-labels.generator';
import React, { ReactNode, Ref } from 'react';
import { PopoverCoordinates, PopoverPosition } from '../../../chart-kit/Popover/Popover.model';
import { Localization } from '../../../config/localization/localization';
import { ChartSettings } from '../../model/chart.model';
import { LabelMode, LabelType, YAxisLabelConfig } from '../../view-models/y-axis/y-axis-configurator.view-model';
export type YAxisAlignReversed = Record<YAxisAlign, YAxisAlign>;
export interface YAxisMainPopoverProps {
    readonly isOpened: boolean;
    readonly config: ChartSettings;
    readonly popoverCoordinates: PopoverCoordinates;
    readonly onClose: () => void;
    readonly changeFitType: (type: FitType, active: boolean) => void;
    readonly toggleAutoScale: (active: boolean) => void;
    readonly toggleAxisType: (type: PriceAxisType) => void;
    readonly yAxisDict: Localization['yAxis'];
    readonly labelPopoverOpen: boolean;
    readonly toggleLabelsPopup: (opened: boolean) => void;
    readonly togglePriceScaleInverse: () => void;
    readonly setAxisAlign: (align: YAxisAlign) => void;
    readonly labelsAndLinesRef?: Ref<HTMLDivElement>;
    readonly position: PopoverPosition;
    readonly toggleLockPriceToBarRatio: () => void;
    readonly onLabelClose: () => void;
    readonly labelsConfig: YAxisLabelConfig;
    readonly setLabelMode: (type: LabelType, mode: LabelMode) => void;
    readonly selectCountDownBarClose: (value: boolean) => void;
    readonly selectDescription: (value: boolean) => void;
    readonly labelsPopoverPosition: PopoverPosition;
}
export declare const YAxisMainPopover: React.NamedExoticComponent<YAxisMainPopoverProps>;
export declare const renderSettingsItem: (settingName: string, active: boolean, icon: JSX.Element, disabled?: boolean, nestedMenuIcon?: JSX.Element) => ReactNode;
