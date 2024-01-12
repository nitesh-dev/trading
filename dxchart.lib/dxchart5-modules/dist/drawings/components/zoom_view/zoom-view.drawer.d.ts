/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { Drawer } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import { ZoomViewModel } from './zoom-view.model';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import { ZoomCanvases } from './zoom-view.types';
import { ContextState } from '../../model/drawings.model';
import { FullChartConfigDrawings } from '../../drawings.config';
export declare class ZoomViewDrawer implements Drawer {
    private config;
    private canvasBoundsContainer;
    private model;
    private ctx;
    private canvasModels;
    private drawingState;
    private combinedCtx;
    constructor(config: FullChartConfigDrawings, canvasBoundsContainer: CanvasBoundsContainer, model: ZoomViewModel, ctx: CanvasRenderingContext2D, canvasModels: Record<ZoomCanvases, CanvasModel>, drawingState: () => ContextState);
    draw(): void;
    /**
     * `drawZoomTool`
     * The method draws a zoomed-in area around the cursor.
     */
    protected drawZoomTool(): void;
    getCanvasIds(): string[];
}
