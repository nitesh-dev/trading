/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasAnimation } from '@devexperts/dxcharts-lite/dist/chart/animation/canvas-animation';
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import EventBus from '@devexperts/dxcharts-lite/dist/chart/events/event-bus';
import { ScaleModel } from '@devexperts/dxcharts-lite/dist/chart/model/scale.model';
import { Unit } from '@devexperts/dxcharts-lite/dist/chart/model/scaling/viewport.model';
import { Observable } from 'rxjs';
import { FullPLChartConfig } from './PLChartConfig';
import { DataSeriesModel, VisualSeriesPoint } from '@devexperts/dxcharts-lite/dist/chart/model/data-series.model';
interface PlLineValue {
    pl: number;
    price: number;
}
export interface PlModelLine {
    id: string;
    name: string;
    type: string;
    points: Array<PlLineValue>;
}
export interface PlModel {
    price: number;
    maxXConstraint?: number;
    plPrecision: number;
    precision: number;
    plFormatter: (value: number) => string;
    lines: Array<PlModelLine>;
    priceFormatter: (price: number) => string;
}
export interface PlLine {
    id: string;
    name: string;
    type: string;
    points: Array<ChartPoint>;
}
export declare class PLChartModel extends ScaleModel {
    private eventBus;
    private canvasBoundsContainer;
    data: Array<PlLine>;
    highLow: [number, number];
    pricePrecision: number;
    plPrecision: number;
    plFormatter?: (pl: number) => string;
    markPrice: number;
    maxXConstraint: number;
    priceFormatter: (price: number) => string;
    candlesPrependSubject: Observable<never>;
    scaleChanged: Observable<Scale>;
    dataSeries: DataSeriesModel | undefined;
    private basicScaleViewportTransformer;
    constructor(eventBus: EventBus, canvasBoundsContainer: CanvasBoundsContainer, config: FullPLChartConfig, canvasAnimationContainer: CanvasAnimation);
    updateModel(model: PlModel): void;
    formatPrice(price: Unit): string;
    formatPl(pl: unknown): string;
    doBasicScale(): void;
}
export declare const spread: (plPrecision: number, highLow: [number, number]) => [number, number];
export interface ChartPoint {
    xValue: number;
    yValue: number;
}
export interface Scale {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
}
export declare const createBasicScaleViewportTransformer: (scale: ScaleModel) => (visualCandleSource: VisualSeriesPoint[]) => void;
export {};
