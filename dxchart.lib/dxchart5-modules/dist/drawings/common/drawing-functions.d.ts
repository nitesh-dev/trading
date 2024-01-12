/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { Vector } from '../model/vector.model';
import { Bounds } from '@devexperts/dxcharts-lite/dist/chart/model/bounds.model';
import { DrawingViewModel, ViewPoint } from '../model/drawing.view-model';
import { YAxisLabelDrawProps } from '@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer';
import { CommonFigureProps } from '../figures/model/figure.model';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { XAxisLabel } from '@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model';
import { ChartWithDrawings } from '../drawings.config';
export declare const drawArrow: (ctx: ExtendedContext, startPoint: Vector, endPoint: Vector, fill?: boolean, arrowSideLength?: number, arrowAngle?: number) => void;
/**
 * This a function which calculates only one YAxisLabel for drawing.
 */
export declare const getOneYLabel: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: ChartWithDrawings) => YAxisLabelDrawProps[];
/**
 * This function creates a new function which calculates only one XAxisLabel for drawing.
 * @param formatterProvider
 */
export declare const createGetOneXLabelFn: (formatterProvider: () => DateTimeFormatter) => (chart: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => Array<XAxisLabel>;
/**
 * This function creates a new function which calculates two XAxisLabels for drawing from set of the points.
 * This function finds two corner points of the drawing and then generates two labels from this points.
 * @param formatterProvider
 */
export declare const createGetXLabelsFromBoundsFn: (formatterProvider: () => DateTimeFormatter) => (chart: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => Array<XAxisLabel>;
export declare const getYLabelsFromBounds: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: ChartWithDrawings) => YAxisLabelDrawProps[];
export declare const calculateYLabelPoints: (points: Vector[]) => ViewPoint[];
export declare const calculateXLabelPoints: (points: Vector[]) => ViewPoint[];
export declare const findBounds: (points: Vector[]) => Bounds;
