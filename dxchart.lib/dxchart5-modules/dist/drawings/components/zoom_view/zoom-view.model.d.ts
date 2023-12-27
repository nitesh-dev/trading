/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CrossToolComponent } from '@devexperts/dxcharts-lite/dist/chart/components/cross_tool/cross-tool.component';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import { Hover } from './zoom-view.types';
export declare class ZoomViewModel extends ChartBaseElement {
    private canvasModel;
    private crossToolComponent;
    currentHover: Hover | null;
    constructor(canvasModel: CanvasModel, crossToolComponent: CrossToolComponent);
    doActivate(): void;
    private fireDraw;
    private updateCross;
}
