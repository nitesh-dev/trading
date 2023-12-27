/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LineProperties } from '../../drawings.config';
import { DrawingModel } from '../../model/drawing.model';
import { DrawingType } from '../../model/drawing-types';
import { DrawingViewModel } from '../../model/drawing.view-model';
import { IndexValuePoint } from '../../model/point-event';
import { Vector } from '../../model/vector.model';
import { ViewPoint } from '../../model/view-point';
import { FibonacciPart } from '../model/figure.model';
export declare function adjustVectorToCrispCoords(vector: Vector, lineWidth: number): ViewPoint;
export declare function getLineProperties<T extends DrawingType>(model: DrawingModel<T>, properties: {
    line: LineProperties;
    activeLine?: LineProperties;
}): LineProperties;
/**
 * @param properties
 * @param {Array<Number>} defaultCoefficients
 * @param {Number} levelCount
 * @param {String} [prefix]
 * @return {Array<{index: Number, coef: Number, props: Object}>}
 * @private
 */
export interface SortedVisibleLevel {
    index: number;
    coef: number;
    props: FibonacciPart;
}
export interface FarthestIntersection {
    side: number;
    point: Vector;
}
export declare const farthestIntersection: (start: Vector, end: Vector, box: Vector[], includeLeftmostSide?: boolean) => FarthestIntersection | null;
export declare const appendPoint: (point: Vector, path: Vector[], eqCheck?: boolean) => void;
export declare const adjustXToCrispLine: (x: number) => number;
export declare const getSortedIndexPoints: (drawingViewModel: DrawingViewModel) => IndexValuePoint[];
/**
 * Returns coordiantes of a bezier curve for a given position
 * @param startX starting x coordinate of a curve
 * @param startY starting y coordinate of a curve
 * @param cpX control point x coordinate of a curve
 * @param cpY control point y coordinate of a curve
 * @param endX ending x coordinate of a curve
 * @param endY ending y coordinate of a curve
 * @param position 0...1, where 0 is a start of a curve, and 1 is the end of a curve
 */
export declare function getQuadraticCurvePoint(startX: number, startY: number, cpX: number, cpY: number, endX: number, endY: number, position: number): Vector;
