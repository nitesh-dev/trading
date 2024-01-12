/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { CrossToolComponent } from '@devexperts/dxcharts-lite/dist/chart/components/cross_tool/cross-tool.component';
import { DrawingManager } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import { FullChartConfigDrawings } from '../../drawings.config';
import { ContextState } from '../../model/drawings.model';
import { ZoomViewModel } from './zoom-view.model';
export declare class ZoomViewComponent extends ChartBaseElement {
    private config;
    private crossToolCanvasModel;
    private canvasBoundsContainer;
    private drawingManager;
    private canvasModels;
    private drawingState;
    readonly model: ZoomViewModel;
    constructor(config: FullChartConfigDrawings, crossToolCanvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer, drawingManager: DrawingManager, canvasModels: CanvasModel[], drawingState: () => ContextState, crossToolComponent: CrossToolComponent);
}
