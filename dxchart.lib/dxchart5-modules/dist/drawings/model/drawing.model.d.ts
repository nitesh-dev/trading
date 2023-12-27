/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LineProperties } from '../drawings.config';
import { DateValuePoint, IndexValuePoint } from './point-event';
import { PropertiesByType } from '../figures/model/properties-by-type';
import { AbstractFigure } from '../figures/model/figure.model';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { DrawingType } from './drawing-types';
import { PaneComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane.component';
export interface DrawingConfig<T extends DrawingType> {
    id: string;
    type: DrawingType;
    visible?: boolean;
    locked?: boolean;
    synced?: boolean;
    data?: unknown;
    figure?: AbstractFigure<unknown>;
    cachedPoints?: IndexValuePoint[];
    keyPoints?: DateValuePoint[];
    properties: PropertiesByType[T];
    active?: boolean;
    paneComponent?: PaneComponent;
    paneId?: string;
}
export interface NewDrawingConfig<T extends DrawingType> {
    id?: string;
    type: DrawingType;
    data?: unknown;
    cachedPoints?: IndexValuePoint[];
    synced?: boolean;
    keyPoints?: DateValuePoint[];
    properties: PropertiesByType[T];
    active?: boolean;
    paneId?: string;
}
export interface InitialDrawingConfig<T extends DrawingType> {
    readonly type: DrawingType;
    readonly properties: PropertiesByType[T];
    readonly synced?: boolean;
}
export interface DrawingModelProperties {
    hitTestLineOffset?: number;
    line?: LineProperties;
    style?: {
        fillBackground?: boolean;
    };
    text?: {
        textFill?: string;
        textSize?: string;
    };
}
/**
 * DrawingModel holds domain drawing state
 * See {@link AbstractFigure} and {@link DrawingViewModel}
 */
export declare class DrawingModel<T extends DrawingType> {
    id: string;
    htId: number;
    type: T;
    /**
     * real position of drawing points (timestamp, value(price))
     */
    keyPoints: DateValuePoint[];
    properties: PropertiesByType[T];
    visible: boolean;
    locked: boolean;
    synced: boolean;
    getPane?: (() => PaneComponent) | undefined;
    /**
     * Indicates whether the drawing is selected or not
     */
    active: boolean;
    /**
     * Actual drawing object, which performs the drawing on the canvas
     */
    figure: AbstractFigure<unknown>;
    /**
     * Number of points required to finish the drawing.
     * Usually it's the number of all points - 1.
     * See {@link AbstractFigure#points}
     */
    fixedPoints: number;
    /**
     * Most of the calculations in drawings.ts are made using cached points,
     * which are re-calculated based on keyPoints.
     */
    cachedPoints: IndexValuePoint[];
    hidden: {
        diameter?: number | null;
        textSelection?: string;
        height?: number | null;
    } | null;
    paneId: string | undefined;
    constructor(id: string, htId: number, type: T, 
    /**
     * real position of drawing points (timestamp, value(price))
     */
    keyPoints: DateValuePoint[], properties: PropertiesByType[T], visible?: boolean, locked?: boolean, synced?: boolean, getPane?: (() => PaneComponent) | undefined, formatterProvider?: () => DateTimeFormatter);
    getFigure(): AbstractFigure<unknown>;
    isAdding(): boolean;
    mergeModel(drawingModelDomain: DrawingConfig<DrawingType>): void;
    setPaneProvider(paneProvider: () => PaneComponent): void;
}
