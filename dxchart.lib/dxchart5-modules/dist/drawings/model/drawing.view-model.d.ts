/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FullChartConfig } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { Point } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
import { DrawingModel } from './drawing.model';
import DrawingsModel from './drawings.model';
import { Vector } from './vector.model';
import { PointType, ViewPoint } from './view-point';
import { PaneComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane.component';
export declare const inRectangle: ({ x, y }: Vector | Point, rect: number[]) => boolean;
/**
 *
 * @returns distance to the point if it matches, otherwise undefined
 */
export declare function pointMatches({ x, y }: Vector, viewpoint: Vector): number | undefined;
interface TextBlock {
    bounds: number[];
    index: number;
    matchWholeFigure: boolean;
}
export declare class DrawingViewModel {
    model: DrawingModel<any>;
    chartConfig: FullChartConfig;
    textBlocks: TextBlock[];
    keyViewPoints: ViewPoint[];
    isDragging: boolean;
    constructor(model: DrawingModel<any>, chartConfig: FullChartConfig);
    update(drawings: DrawingsModel, updateHiddenProps?: boolean): void;
    setDrawingPane(pane: PaneComponent, drawings: DrawingsModel): void;
    /**
     * Gets figure either from:
     * - FigureFactory.ts (new way - model.figure)
     */
    getFigure(): import("../figures/model/figure.model").AbstractFigure<unknown>;
    addTextBlock(bounds: number[], index: number, matchWholeFigure?: boolean): void;
    keyPointsShown(): boolean;
    getDragViewPoints(): ViewPoint[];
    getResizeViewPoints(): ViewPoint[];
    getRotateViewPoints(): ViewPoint[];
    getClosestDragViewPoint(x: number, y: number): ViewPoint | undefined;
    getClosestResizeViewPoint(x: number, y: number): ViewPoint | undefined;
    getClosestRotateViewPoint(x: number, y: number): ViewPoint | undefined;
    getClosestViewPoint(x: number, y: number, types: PointType[]): ViewPoint | undefined;
}
export { ViewPoint };
