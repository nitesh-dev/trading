/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure } from './model/figure.model';
import { LineProperties } from '../drawings.config';
import { Vector } from '../model/vector.model';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/drawing.view-model';
import { DrawingType } from '../model/drawing-types';
export interface MultiChannelProperties {
    hitTestLineOffset: number;
    line: LineProperties;
}
export declare class MultiChannel extends AbstractFigure<MultiChannelProperties> {
    points: number;
    type: DrawingType;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: MultiChannelProperties): void;
    constraint: (points: Vector[]) => Vector[];
}
