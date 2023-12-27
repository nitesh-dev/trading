/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CursorType } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { FullChartConfigDrawings } from '../drawings.config';
import { ExtendedContext, PropertiesForFill } from '../components/extended_context/ExtendedContext';
import { DrawingType } from '../model/drawing-types';
import { DrawingViewModel } from '../model/drawing.view-model';
import DrawingsModel, { DragDrawingInfo } from '../model/drawings.model';
import { PointEvent } from '../model/point-event';
import { ViewPoint } from '../model/view-point';
import { AbstractFigure, FigureBackgroundProperties } from './model/figure.model';
export interface IconProperties {
    iconStyle: PropertiesForFill;
    background?: FigureBackgroundProperties;
    icon: IconItem;
}
export interface IconItem {
    name: string;
    svg: string;
    w: number;
    h: number;
}
export declare class Icon extends AbstractFigure<IconProperties> {
    readonly icon: IconItem;
    points: number;
    readonly type: DrawingType;
    private scaleFactor;
    private currentAngle;
    private committedAngle;
    constructor(icon: IconItem);
    get angle(): number;
    calculateKeyViewPoints: (points: ViewPoint[]) => ViewPoint[];
    private calculateResizeViewPoints;
    private calculateRotateViewPoints;
    onUp: (_: unknown, drawingsModel: DrawingsModel) => void;
    getCursor: (point: ViewPoint, viewModel: DrawingViewModel) => CursorType | undefined;
    resize: (viewModel: DrawingViewModel, movedPoint: PointEvent) => void;
    rotate: (viewModel: DrawingViewModel, movedPoint: PointEvent, match: DragDrawingInfo) => void;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: IconProperties): void;
    drawPoints(vm: DrawingViewModel, ctx: ExtendedContext, chartConfig: FullChartConfigDrawings, drawingsModel: DrawingsModel): void;
}
