/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, DateValuePoint } from './model/figure.model';
import { Vector } from '../model/vector.model';
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { LineProperties } from '../drawings.config';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/drawing.view-model';
import { DrawingModel } from '../model/drawing.model';
import { IndexValuePoint, PointEvent } from '../model/point-event';
import DrawingsModel from '../model/drawings.model';
import { DrawingType } from '../model/drawing-types';
interface TrendDrawingModel extends Pick<DrawingModel<'trend'>, 'type' | 'keyPoints' | 'fixedPoints' | 'cachedPoints'> {
}
interface TrendFigureLineProperties extends LineProperties {
    opacity: number;
}
export interface VectorType {
    x: number;
    y: number;
}
export interface DateValueType extends VectorType, DateValuePoint {
}
export interface TrendProperties {
    drawingArea: TrendFigureLineProperties;
    drawingMode: 'both' | 'lines' | 'boxes';
    up: TrendFigureLineProperties;
    down: TrendFigureLineProperties;
    style: {
        fillBackground: boolean;
    };
}
export declare class Trend extends AbstractFigure<TrendProperties> implements TrendDrawingModel {
    points: number;
    type: "trend";
    fixedPoints: number;
    cachedPoints: IndexValuePoint[];
    keyPoints: DateValuePoint[];
    constructor(keyPointsLength: number);
    pointConstraint: (point: PointEvent, model: DrawingViewModel, bootstrap: Chart) => boolean;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: TrendProperties, chartBootstrap: Chart): void;
    constraint: (points: Vector[], changedIndex: number, chartBootstrap: Chart) => Vector[];
    beforeCommit: (drawingViewModel: DrawingViewModel, drawings: DrawingsModel) => boolean;
    isDisallowed: (model: DrawingModel<DrawingType>, pointEvent: PointEvent) => boolean;
}
export {};
