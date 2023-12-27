/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Drawer } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import { HitTestCanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/hit-test-canvas.model';
import DrawingsModel from '../model/drawings.model';
import Canvases from '../canvases';
export declare const extendedHTRadius = 12;
export declare class DrawingsHitTestDrawer implements Drawer {
    private drawings;
    private canvases;
    private hitTestCanvasModel;
    constructor(drawings: DrawingsModel, canvases: Canvases, hitTestCanvasModel: HitTestCanvasModel);
    draw(): void;
    getCanvasIds(): Array<string>;
}
