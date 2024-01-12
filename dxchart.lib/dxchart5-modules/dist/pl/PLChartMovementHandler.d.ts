/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import { PLChartModel } from './PLChartModel';
import { CanvasInputListenerComponent } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
/**
 * Handles PL chart movement events.
 */
export declare class PLChartMovementHandler extends ChartBaseElement {
    private canvasInputListener;
    private plChartModel;
    private canvasModel;
    constructor(canvasInputListener: CanvasInputListenerComponent, plChartModel: PLChartModel, canvasModel: CanvasModel);
    protected doActivate(): void;
    moveSection(delta: number): void;
    moveStep(delta: number): void;
    zoomOut(layerX: number): void;
    zoomIn(layerX: number): void;
    private zooming;
    get rightBound(): number;
    get range(): number;
}
