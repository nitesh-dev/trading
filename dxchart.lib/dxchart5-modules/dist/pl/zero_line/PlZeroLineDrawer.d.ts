/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { Drawer } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import { FullPLChartConfig } from '../PLChartConfig';
import { PLChartModel } from '../PLChartModel';
/**
 * Drawer for PL chart zero line
 */
export declare class PlZeroLineDrawer implements Drawer {
    private config;
    private plChartModel;
    private canvasModel;
    private canvasBoundsContainer;
    constructor(config: FullPLChartConfig, plChartModel: PLChartModel, canvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer);
    draw(): void;
    private drawZeroLine;
    getCanvasIds(): Array<string>;
    reset(): void;
}
