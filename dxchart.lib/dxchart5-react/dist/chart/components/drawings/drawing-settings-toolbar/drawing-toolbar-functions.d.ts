/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { PlainDrawingType } from '../../../model/drawing.model';
import { Lens, Traversal } from 'monocle-ts';
import { DrawingModel } from '@dx-private/dxchart5-modules/dist/drawings/model/drawing.model';
import { LineStyle } from '../../../../chart-kit/LineStylePicker/LineStylePicker.component';
/**
 * Updates the line color in drawing.
 * @param lineColor
 */
export declare const updateDrawingLineColor: (lineColor: string) => <T extends PlainDrawingType>(drawingModel: DrawingModel<T>) => DrawingModel<T>;
/**
 * Updates the line color in drawing.
 * @param fillStyle
 */
export declare const updateDrawingBackgroundColor: (fillStyle: string) => <T extends "curve" | "arc" | "date_price_range" | "price_range" | "date_range">(drawingModel: DrawingModel<T>) => DrawingModel<T>;
/**
 * Updates the line width and dash in drawing;
 * @param lineWidthDash
 */
export declare const updateDrawingLineWidthDash: (lineWidthDash: LineWidthDash) => (drawingModel: DrawingModel<PlainDrawingType>) => DrawingModel<PlainDrawingType>;
/**
 * Lens for complex drawings: fibonacci and gann.
 * Gets "zones" and "rays" to modify color / line.
 */
export declare const drawingLensFromPropNames: <T, DT extends "text" | "callout" | "price_label" | "magnifying_tool_time_range" | "magnifying_tool_rectangle" | "magnifying_tool_time_range_wheel" | "line" | "vertical_line" | "extended_line" | "trend_channel" | "multichannel" | "horizontal_ray" | "path" | "fibonacci_retracements" | "gann_fan" | "vertical_arrow_up" | "vertical_arrow_down" | "info_line" | "ray" | "arrow" | "horizontal_line" | "fibonacci_rays" | "ellipse" | "rectangle" | "fibonacci_ark" | "fibonacci_circles" | "pitchfork" | "brush" | "elliott_wave" | "elliott_correction_wave" | "fibonacci_projection" | "fibonacci_channel" | "gann_box" | "gann_square" | "fibonacci_time_zones" | "regression_trend" | "fibonacci_spiral" | "cycle_brackets" | "fibonacci_time_extension" | "fibonacci_time_ratios" | "curve" | "arc" | "date_price_range" | "price_range" | "date_range" | "icon" | "highlighter">(path: string[], propNames: readonly string[]) => Lens<DrawingModel<DT>, T>[];
export declare const onLineAndBackgroundColorChange: <T extends "curve" | "arc" | "date_price_range" | "price_range" | "date_range">(handler: (model: DrawingModel<T>) => void) => (drawingModel: DrawingModel<T>) => (color: string) => void;
/**
 * Creates the onColorChange fn for complex drawings, like 'fibonacci_rays'.
 */
type createOnColorChange_FromLensArrayType = <T>(onValueChange: (model: DrawingModel<PlainDrawingType>) => void) => (lensArray: Lens<DrawingModel<PlainDrawingType>, T>[]) => (drawingModel: DrawingModel<PlainDrawingType>) => (color: string) => void;
export declare const createOnColorChange_FromLensArray: createOnColorChange_FromLensArrayType;
/**
 * Creates onColorChange for 'fibonacci_ark' type drawings. Where 'circles' prop is Array (traversal).
 */
type createOnColorChange_FromTraversalType = <T>(onValueChange: (model: DrawingModel<PlainDrawingType>) => void) => (traversal: Traversal<DrawingModel<PlainDrawingType>, T>[]) => (drawingModel: DrawingModel<PlainDrawingType>) => (color: string) => void;
export declare const createOnColorChange_FromTraversal: createOnColorChange_FromTraversalType;
/**
 * Creates the onLinePickerChange fn for complex drawings.
 */
type createOnLineChange_FromTraversalType = <T>(onValueChange: (model: DrawingModel<PlainDrawingType>) => void) => (traversal: Traversal<DrawingModel<PlainDrawingType>, T>[]) => (drawingModel: DrawingModel<PlainDrawingType>) => (linePicker: LineStyle) => void;
export declare const createOnLineChange_FromTraversal: createOnLineChange_FromTraversalType;
export interface LineWidthDash {
    lineWidth: number;
    lineDash: number[];
}
export {};
