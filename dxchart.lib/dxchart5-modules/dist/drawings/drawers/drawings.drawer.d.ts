/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import Canvases from '../canvases';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { ExtendedKeyPointStyle, FullChartConfigDrawings } from '../drawings.config';
import { DrawingModel } from '../model/drawing.model';
import { DrawingViewModel, ViewPoint } from '../model/drawing.view-model';
import DrawingsModel from '../model/drawings.model';
import { DrawingType } from '../model/drawing-types';
import { DynamicModelDrawer } from '@devexperts/dxcharts-lite/dist/chart/components/dynamic-objects/dynamic-objects.drawer';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
/**
 * Draws the drawings!
 */
export declare class DrawingsDrawer implements DynamicModelDrawer<DrawingModel<any>> {
    private drawingsModel;
    private canvases;
    private config;
    private chartModel;
    constructor(drawingsModel: DrawingsModel, canvases: Canvases, config: FullChartConfigDrawings, chartModel: ChartModel);
    draw(_: CanvasModel, model: DrawingModel<DrawingType>): void;
    drawDrawing(model: DrawingModel<any>, context: ExtendedContext): void;
    getCanvasIds(): Array<string>;
}
/**
 * Draws the actual drawing figure.
 * @param vm - drawing's VM
 * @param ctx
 * @param drawings
 * @doc-tage canvas,drawings
 */
export declare function drawShape(vm: DrawingViewModel, ctx: ExtendedContext, drawings: DrawingsModel): void;
/**
 * @param ctx {ExtendedContext}
 * @param center {Vector}
 * @param styles {Object}
 */
export declare function drawPoint(ctx: ExtendedContext, center: ViewPoint, styles: {
    shape?: string;
    radius?: number;
    side?: number;
    radiusExtension?: number;
}): void;
/**
 * Draws action points of selected drawing.
 * @param vm - the drawing's VM
 * @param ctx
 * @param chartConfig
 * @param drawings
 * @param hoverPointIndex
 * @param radiusExtension
 */
export declare function drawPoints(vm: DrawingViewModel, ctx: ExtendedContext, chartConfig: FullChartConfigDrawings, drawings: DrawingsModel, radiusExtension?: number): void;
export declare const getKeyPointStyleForDrawing: (chartConfig: FullChartConfigDrawings, vm: DrawingViewModel) => ExtendedKeyPointStyle;
