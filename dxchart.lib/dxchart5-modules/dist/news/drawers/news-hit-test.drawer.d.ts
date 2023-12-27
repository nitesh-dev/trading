/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { NewsComponent } from '../news.component';
import { FullChartConfigNews } from '../news.config';
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { Drawer } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import { HitTestCanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/hit-test-canvas.model';
export declare class NewsHitTestDrawer implements Drawer {
    private canvasModel;
    private newsComponent;
    private config;
    private canvasBoundsContainer;
    constructor(canvasModel: HitTestCanvasModel, newsComponent: NewsComponent, config: FullChartConfigNews, canvasBoundsContainer: CanvasBoundsContainer);
    draw(): void;
    getCanvasIds(): Array<string>;
}
