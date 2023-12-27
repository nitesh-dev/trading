/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, FibonacciPart, CommonFigureProps, FigureBackgroundProperties } from './model/figure.model';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/drawing.view-model';
import { DrawingType } from '../model/drawing-types';
export interface PitchforkProperties extends CommonFigureProps {
    hitTestLineOffset: number;
    levels: FibonacciPart[];
    background: FigureBackgroundProperties;
}
export declare class Pitchfork extends AbstractFigure<PitchforkProperties> {
    points: number;
    type: DrawingType;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: PitchforkProperties): void;
}
