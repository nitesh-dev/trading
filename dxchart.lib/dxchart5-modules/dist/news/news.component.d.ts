/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import { DrawingManager } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import { Point } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
import { HitTestCanvasModel, HitTestSubscriber } from '@devexperts/dxcharts-lite/dist/chart/model/hit-test-canvas.model';
import { BehaviorSubject } from 'rxjs';
import { FullChartConfigNews } from './news.config';
import { HoveredNews, News, NewsPerCandle } from './model/news.model';
export declare class NewsComponent extends ChartBaseElement implements HitTestSubscriber {
    /**
     * Observes hovered news when mouse moves in, and provides null when mouse moves out.
     */
    newsHoveredSubject: BehaviorSubject<HoveredNews | null>;
    private newsPerCandle;
    private readonly chartModel;
    private readonly canvasModel;
    private readonly drawingManager;
    private readonly hitTestCanvasModel;
    private readonly config;
    constructor(chartModel: ChartModel, canvasModel: CanvasModel, drawingManager: DrawingManager, hitTestCanvasModel: HitTestCanvasModel, config: FullChartConfigNews, canvasBoundsContainer: CanvasBoundsContainer);
    protected doActivate(): void;
    getNewsCoordinate(news: NewsPerCandle): Point;
    onHover(news: NewsPerCandle | null): void;
    onTouchStart(news: NewsPerCandle | null): void;
    getIdRange(): [number, number];
    lookup(id: number): NewsPerCandle | undefined;
    /**
     * Sets news to the chart
     * @param news
     */
    setNews(news: News[]): void;
    /**
     * Changes the component visibility.
     * @param visible
     */
    setVisible(visible: boolean): void;
    getNewsPerCandle(): NewsPerCandle[];
}
