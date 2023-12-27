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
import { RCMenuProps } from '../../../chart-kit/Popover/popover-menu-generic';
import { OrderData } from '../../model/trading/order.model';
import { ChartSettings } from '../../model/chart.model';
import { Lens } from 'monocle-ts';
import { ChartReactConfig } from '../../../config/chart-react-config';
import { ThemeType } from '../../model/theme.model';
import { MainSeriesTradingData } from '../right-click-menu/right-click-menu-trading-btns';
import { RecentDrawing } from '../../view-models/drawings/drawing.view-model';
import { IconsPool } from '../../../config/icons-pool';
export interface BackgroundMenuProps extends RCMenuProps {
    readonly mainSeriesTradingData: MainSeriesTradingData;
    readonly settings: ChartSettings;
    readonly onCreateOrder: (orderData: OrderData) => void;
    readonly onSettingsChange: (lens: Lens<ChartSettings, any>, value: any) => void;
    readonly chartReactConfig: ChartReactConfig;
    readonly sessionBreaksDisabled: boolean;
    readonly activeTheme: ThemeType;
    readonly onChangeTheme: (type: ThemeType) => void;
    readonly recentDrawings: RecentDrawing[];
    readonly onRecentDrawingSelect: (value: RecentDrawing) => void;
    readonly onClearIndicators: () => void;
    readonly onOpenSettings: () => void;
    readonly onResetChart: () => void;
    readonly drawingsVisible: boolean;
    readonly onChangeDrawingsVisibility: () => void;
    readonly onClearDrawings: () => void;
    readonly iconsPool: IconsPool;
}
export declare const BackgroundMenu: React.NamedExoticComponent<BackgroundMenuProps>;
