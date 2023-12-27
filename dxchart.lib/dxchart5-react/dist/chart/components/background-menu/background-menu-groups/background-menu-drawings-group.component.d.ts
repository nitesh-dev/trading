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
import { RecentDrawing } from '../../../view-models/drawings/drawing.view-model';
import { IconsPool } from '../../../../config/icons-pool';
export interface BackgroundMenuDrawingsGroupProps {
    readonly drawingsVisible: boolean;
    readonly recentDrawings: RecentDrawing[];
    readonly iconsPool: IconsPool;
    readonly onRecentDrawingSelect: (value: RecentDrawing) => void;
    readonly onChangeDrawingsVisibility: () => void;
    readonly onClearDrawings: () => void;
    readonly onPopoverClose: () => void;
}
export declare const BackgroundMenuDrawingsGroup: React.NamedExoticComponent<BackgroundMenuDrawingsGroupProps>;
