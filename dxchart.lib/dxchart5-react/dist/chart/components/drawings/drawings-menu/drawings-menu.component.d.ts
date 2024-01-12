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
import { RCMenuProps } from '../../../../chart-kit/Popover/popover-menu-generic';
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/drawing.model';
import { DrawingType } from '../../../model/drawing.model';
import { ReorderType } from '../../right-click-menu/right-click-menu-reorder-btns.component';
export interface DrawingsMenuProps extends RCMenuProps {
    readonly drawing: DrawingModel<DrawingType>;
    readonly toggleDrawingLocked: (drawing: DrawingModel<DrawingType>) => void;
    readonly toggleDrawingVisibility: (drawing: DrawingModel<DrawingType>) => void;
    readonly reorderDrawing: (reorderType: ReorderType) => void;
}
export declare const DrawingsMenu: React.NamedExoticComponent<DrawingsMenuProps>;
