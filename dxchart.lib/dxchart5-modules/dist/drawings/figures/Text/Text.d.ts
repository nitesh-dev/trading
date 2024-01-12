/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Bounds } from '@devexperts/dxcharts-lite/dist/chart/model/bounds.model';
import { ExtendedContext } from '../../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../../model/drawing.view-model';
import { Vector } from '../../model/vector.model';
import { AbstractFigure } from '../model/figure.model';
import { DrawingType } from '../../model/drawing-types';
import { ChartWithDrawings } from '../../drawings.config';
export type GradientDirections = 'right' | 'down' | 'left' | 'top';
export interface TextLabels {
    textFill: string;
    textBg: string;
    textBgGradient?: {
        startColor: string;
        stopColor: string;
        direction?: GradientDirections;
    };
    borderRadius?: number;
    borderSize?: number;
    bgBorder?: string;
    shadowBlur?: number;
    shadowColor?: string;
    textStyle: {
        bold?: boolean;
        underline?: boolean;
        italic?: boolean;
    };
    backgroundOffsetWidth: number;
    backgroundOffsetHeight: number;
    availableBackgroundColors: string[];
    rtl?: boolean;
    lineHeight?: string;
}
export interface TextLabelsExtended extends TextLabels {
    textFontFamily?: string;
    textSize: string;
}
export interface TextProperties {
    hitTestLineOffset: number;
    text: TextLabelsExtended;
    textValue: string;
    isTransparent?: boolean;
    showBorder?: boolean;
}
export declare class Text extends AbstractFigure<TextProperties> {
    points: number;
    symbolsInLength: number;
    type: DrawingType;
    textToolPoint: Vector;
    textBlockBounds: Omit<Bounds, 'pageX' | 'pageY'> | undefined;
    isEditing: boolean;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: TextProperties, chart: ChartWithDrawings): void;
    getClone: () => null;
}
