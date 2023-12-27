/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { VisibleRayFR } from '../../figures/FibonacciRays';
import { VisibleRayGannFan } from '../../figures/GannFan';
import { FibonacciPart } from '../../figures/model/figure.model';
import { FarthestIntersection, SortedVisibleLevel } from '../../figures/utils/utils';
import { ViewPoint } from '../../model/drawing.view-model';
import { Vector } from '../../model/vector.model';
import { ExtendedContext } from './ExtendedContext';
export declare function drawRayExtent<T extends {
    style: {
        extendLeft?: boolean;
        extendRight?: boolean;
    };
}>(ctx: ExtendedContext, a: Vector, b: Vector, props: T): void;
export declare function drawRayExtentStraight<T extends {
    style: {
        extendLeft?: boolean;
        extendRight?: boolean;
    };
}>(ctx: ExtendedContext, a: Vector, b: Vector, props: T): void;
export declare function calculateRaysVerticalLabelPlacement(ctx: ExtendedContext, start: ViewPoint, visibleRays: VisibleRayFR[] | VisibleRayGannFan[], intersection: FarthestIntersection): "top" | "bottom";
export declare const sortedVisibleLevels2: (levels: FibonacciPart[], defaultCoefficients: number[]) => SortedVisibleLevel[];
