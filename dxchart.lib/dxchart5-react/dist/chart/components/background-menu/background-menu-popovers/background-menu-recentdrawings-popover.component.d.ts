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
import { RecentDrawing } from '../../../view-models/drawings/drawing.view-model';
import { IconsPool } from '../../../../config/icons-pool';
export interface BackgroundMenuRecentDrawingsPopoverProps {
    readonly isOpened: boolean;
    readonly onClose: () => void;
    readonly anchorRef: ReactRef;
    readonly recentDrawings: RecentDrawing[];
    readonly onRecentDrawingSelect: (value: RecentDrawing) => void;
    readonly iconsPool: IconsPool;
}
export declare const BackgroundMenuRecentDrawingsPopover: React.NamedExoticComponent<BackgroundMenuRecentDrawingsPopoverProps>;
