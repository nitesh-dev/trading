/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import { CanvasInputListenerComponent } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
import DrawingsModel from '../model/drawings.model';
import { PaneComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane.component';
export declare class DrawingsEventListeners extends ChartBaseElement {
    private drawingsModel;
    private canvasInputListener;
    private canvasBoundsContainer;
    constructor(drawingsModel: DrawingsModel, canvasInputListener: CanvasInputListenerComponent, canvasBoundsContainer: CanvasBoundsContainer);
    protected doActivate(): void;
    resolvePoint(): import("../model/point-event").PointEvent | undefined;
    resolvePane(): PaneComponent | undefined;
    private keyDownHandler;
    enableUserControls(): void;
    disableUserControls(): void;
}
