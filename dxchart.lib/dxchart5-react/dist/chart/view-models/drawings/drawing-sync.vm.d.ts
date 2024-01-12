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
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/drawing.model';
import { Subject } from 'rxjs';
import { Sink } from '../../../context/sink2';
import { Property } from '../../../utils/property.utils';
import { DrawingType } from '../../model/drawing.model';
export interface MultichartDrawingSyncVM {
    isDrawingSyncEnabled: Property<boolean>;
    setDrawingSync: (enabled: boolean) => void;
    syncedDrawingUpdated: Subject<DrawingModel<DrawingType> | null>;
    syncedDrawingRemoved: Subject<DrawingModel<DrawingType>>;
    saveDrawings: Subject<void>;
}
export declare const createDrawingSyncViewModel: import("../../../context/context2").Context<unknown, (initialSyncEnabled: boolean) => Sink<MultichartDrawingSyncVM>>;
