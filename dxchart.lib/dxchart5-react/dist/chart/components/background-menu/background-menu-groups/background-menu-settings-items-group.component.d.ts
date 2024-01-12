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
import { ChartSettings } from '../../../model/chart.model';
import { Lens } from 'monocle-ts';
import { ChartReactConfig } from '../../../../config/chart-react-config';
import { ThemeType } from '../../../model/theme.model';
export interface BackgroundMenuSettingsItemsGroupProps {
    readonly settings: ChartSettings;
    readonly onSettingsChange: (lens: Lens<ChartSettings, any>, value: any) => void;
    readonly chartReactConfig: ChartReactConfig;
    readonly sessionBreaksDisabled: boolean;
    readonly activeTheme: ThemeType;
    readonly onChangeTheme: (type: ThemeType) => void;
    readonly onPopoverClose: () => void;
}
export declare const BackgroundMenuSettingsItemsGroup: React.NamedExoticComponent<BackgroundMenuSettingsItemsGroupProps>;
