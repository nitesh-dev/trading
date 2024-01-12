/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { CursorType, DateTimeFormatConfig, FullChartColors, FullChartConfig } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { ZoomViewComponent } from './components/zoom_view/zoom-view.component';
import { DrawingsComponent } from './drawings.component';
import { PropertiesByType } from './figures/model/properties-by-type';
import { DrawingType } from './model/drawing-types';
import { DrawingModel } from './model/drawing.model';
export interface DrawingKeyPointStyle {
    fillStyle?: string;
    lineColor?: string;
    lineWidth?: number;
    opacity?: number;
    radius?: number;
    shape?: string;
}
export type ExtendedKeyPointStyle = DrawingKeyPointStyle & {
    radiusExtension?: number;
};
export interface DrawingCursors {
    type: DrawingType;
    resize: CursorType;
    rotate: CursorType;
    match: CursorType;
    grab: CursorType;
    grabbing: CursorType;
    draw: CursorType;
    disallowed: CursorType;
}
export interface DrawingKeyPoint {
    timestamp: number;
    value: number;
}
export interface LineProperties {
    lineColor: string;
    lineDash: Array<number>;
    lineWidth: number;
    lineCap?: CanvasLineCap;
    lineVisibility?: boolean;
}
export interface Drawing<T extends DrawingType> {
    data?: unknown;
    id: string;
    visible: boolean;
    locked: boolean;
    synced?: boolean;
    keyPoints: Array<DrawingKeyPoint>;
    properties: PropertiesByType[T];
    type: T;
    _internalDrawing: DrawingModel<T>;
}
export type SnapMode = 'increments' | 'none';
export interface ChartConfigComponentsDrawings {
    visible: boolean;
    /**
     * Magnet for drawings - cursor will stick to candle OHLC when close to it.
     * Magnet strength can be any number, for example: 0 - disabled, 30 - strong magnet.
     */
    magnet: number;
    /**
     * Snap mode for drawings - minimal step for price axis to put a drawing.
     * Possible values: 'increments', 'none'.
     */
    snapping: SnapMode;
    /**
     * Format for X axis labels for drawings. Any drawing have a projection on X axis.
     */
    xAxisLabelFormat: Array<DateTimeFormatConfig>;
    /**
     * Infinite drawing - when in this mode, the same drawing will start again once finished.
     * Press Escape to cancel drawing.
     */
    drawingMode: boolean;
    cursors: DrawingCursors[];
    fontSize: number;
    fontFamily: string;
    zoom: ChartDrawingsConfigZoomTool;
}
export interface DrawingsTheme {
    points: {
        defaultKeyPoint: DrawingKeyPointStyle;
        activeKeyPoint: DrawingKeyPointStyle;
        defaultHoverKeyPoint: DrawingKeyPointStyle;
        activeHoverKeyPoint: DrawingKeyPointStyle;
        addingKeyPoint: DrawingKeyPointStyle;
    };
    xAxis: {
        highlightColor: string;
        labelColor: string;
    };
    yAxis: {
        highlightColor: string;
        labelColor: string;
    };
    textBg: string;
    textColor: string;
    zoom: {
        edgeColor: string;
        captureZoneBorderColor: string;
    };
}
export type ChartWithDrawings = Chart & {
    drawings: DrawingsComponent;
    zoomViewComponent: ZoomViewComponent;
    config: FullChartConfigDrawings;
};
export interface ChartDrawingsConfigZoomTool {
    enabled: boolean;
    /**
     * how much the image is zoomed in
     */
    scaleFactor: number;
    /**
     * size of zoom tool, since it is circle this both it's width and height
     */
    diameter: number;
    /**
     * distance from the top of the canvas to top point of the zoom tool
     */
    topIndent: number;
    /**
     * distance from the right edge of the canvas to rightest point of the zoom tool
     */
    rightIndent: number;
    /**
     * intensity of a blur effect on the edge of the zoom tool
     */
    blurDistance: number;
    /**
     * width of the edge
     */
    edgeWidth: number;
    /**
     * is shown circle around the cursor
     */
    showCaptureZone: boolean;
}
export interface DrawingsLabelsTheme {
    textColor: string;
    invertedTextColor: string;
}
export type FullChartConfigDrawings = {
    components: {
        drawings: ChartConfigComponentsDrawings;
    };
    colors: {
        drawingsTheme: DrawingsTheme;
        labels: {
            drawings: DrawingsLabelsTheme;
        };
    };
} & FullChartConfig;
export type FullChartColorsDrawings = {
    drawingsTheme: DrawingsTheme;
} & FullChartColors;
export declare function getDefaultCursorsForDrawing(type: DrawingType): DrawingCursors;
export declare const defaultDrawingColors: {
    points: {
        defaultKeyPoint: {
            shape: string;
            radius: number;
            fillStyle: string;
            lineWidth: number;
            lineColor: string;
            opacity: number;
        };
        activeKeyPoint: {
            shape: string;
            radius: number;
            fillStyle: string;
            lineWidth: number;
            lineColor: string;
            opacity: number;
        };
        defaultHoverKeyPoint: {
            shape: string;
            radius: number;
            fillStyle: string;
            lineWidth: number;
            lineColor: string;
            opacity: number;
        };
        activeHoverKeyPoint: {
            shape: string;
            radius: number;
            fillStyle: string;
            lineWidth: number;
            lineColor: string;
            opacity: number;
        };
        addingKeyPoint: {
            shape: string;
            radius: number;
            fillStyle: string;
            lineWidth: number;
            lineColor: string;
            opacity: number;
        };
    };
    xAxis: {
        highlightColor: string;
        labelColor: string;
    };
    yAxis: {
        highlightColor: string;
        labelColor: string;
    };
    textBg: string;
    textColor: string;
    zoom: {
        edgeColor: string;
        captureZoneBorderColor: string;
    };
};
export declare const defaultDrawingsConfig: ChartConfigComponentsDrawings;
export declare const applyDrawingsConfig: <T extends FullChartConfig>(_config: T) => T & {
    components: {
        drawings: ChartConfigComponentsDrawings;
    };
    colors: {
        drawingsTheme: DrawingsTheme;
        labels: {
            drawings: DrawingsLabelsTheme;
        };
    };
} & FullChartConfig;
