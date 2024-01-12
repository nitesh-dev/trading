/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, FibonacciPart, CommonFigureProps, FigureLabelsCoefProperties, FigureLabelsPlacementProperties, FigureLabelsPaddingsProperties, FigureBackgroundProperties, FigureLabelPlacementToTheLine, FigureLabelSidePlacement } from './model/figure.model';
import { ChartWithDrawings, LineProperties } from '../drawings.config';
import { DrawingType } from '../model/drawing-types';
import { DrawingViewModel } from '../model/drawing.view-model';
import { ExtendedContext, Paddings2D, PropertiesForFill } from '../components/extended_context/ExtendedContext';
import { Vector } from '../model/vector.model';
import { TextLabels } from './Text/Text';
import { Bounds } from '@devexperts/dxcharts-lite/dist/chart/model/bounds.model';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
export interface FibonacciTimeZonesProperties extends CommonFigureProps {
    hitTestLineOffset?: number;
    zones: FibonacciPart[];
    labels: FigureLabelsCoefProperties & FigureLabelsPlacementProperties & FigureLabelsPaddingsProperties;
    background: FigureBackgroundProperties;
    text?: TextLabels;
}
interface FibonacciTimeZonesZoneLabel {
    fontFamily: string;
    fontSize: number;
}
export declare class FibonacciTimeZones extends AbstractFigure<FibonacciTimeZonesProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: FibonacciTimeZonesProperties, chartBootstrap: ChartWithDrawings): void;
    getXAxisLabels: (chart: ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
export declare const getZoneLineXCalculator: (startFrom: number, periodLength: number, reverse?: boolean) => (index: number) => number;
export declare function drawZoneLine(ctx: ExtendedContext, props: LineProperties, x: number, startY: number, endY: number): void;
export declare function fillZoneBackground(ctx: ExtendedContext, props: PropertiesForFill, startX: number, startY: number, endX: number, endY: number, bounds?: Bounds): void;
export declare function drawZoneLabel(ctx: ExtendedContext, zone: FibonacciPart, properties: FibonacciTimeZonesProperties, drawingsChartConfig: FibonacciTimeZonesZoneLabel, verticalPlacement: FigureLabelPlacementToTheLine, horizontalPlacement: FigureLabelSidePlacement, bounds: Bounds, paddings: Paddings2D, calcZoneXCoordinate: (index: number) => number): void;
export declare function getZoneLabelPosition(verticalPlacement: FigureLabelPlacementToTheLine, horizontalPlacement: FigureLabelSidePlacement, x: number, textWidth: number, lineHeight: number, bounds: Bounds, paddings: Paddings2D): [number, number];
export declare function getZoneLabelYPosition(verticalPlacement: FigureLabelPlacementToTheLine, bounds: Bounds, lineHeight: number, padding: number): number;
export declare function getZoneLabelXPosition(horizontalPlacement: FigureLabelSidePlacement, x: number, textWidth: number, padding: number): number;
export declare function getVisibleZones(zones: FibonacciPart[]): FibonacciPart[];
export {};
