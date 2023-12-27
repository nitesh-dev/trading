/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Pixel } from '@devexperts/dxcharts-lite/dist/chart/model/scaling/viewport.model';
import { Vector } from './vector.model';
export type PointType = 'DRAG' | 'RESIZE' | 'ROTATE';
export declare class ViewPoint extends Vector {
    hidden: boolean;
    type: PointType;
    constructor(x: Pixel, y: Pixel, hidden?: boolean, type?: PointType);
}
