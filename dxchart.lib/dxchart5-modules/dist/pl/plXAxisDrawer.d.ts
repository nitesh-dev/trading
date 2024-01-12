/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FullChartConfig } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { NumericAxisLabel } from '@devexperts/dxcharts-lite/dist/chart/components/labels_generator/numeric-axis-labels.generator';
import { Drawer } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import { Bounds } from '@devexperts/dxcharts-lite/dist/chart/model/bounds.model';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import { ViewportModel } from '@devexperts/dxcharts-lite/dist/chart/model/scaling/viewport.model';
export declare class XAxisDrawer implements Drawer {
    private config;
    private canvasModel;
    private labelsProvider;
    private boundsProvider;
    private viewportModel;
    constructor(config: FullChartConfig, canvasModel: CanvasModel, labelsProvider: () => NumericAxisLabel[], boundsProvider: () => Bounds, viewportModel: ViewportModel);
    draw(): void;
    protected getBackgroundColor(): string;
    protected getFont(): string;
    protected getLabelTextColor(): string;
    getCanvasIds(): Array<string>;
    reset(): void;
}
