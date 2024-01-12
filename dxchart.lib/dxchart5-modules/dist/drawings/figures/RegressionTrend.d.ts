/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { LineProperties } from '../drawings.config';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/drawing.view-model';
import { AbstractFigure, CommonFigureProps } from './model/figure.model';
import VisualCandle from '@devexperts/dxcharts-lite/dist/chart/model/visual-candle';
import { Vector } from '../model/vector.model';
import { Pixel, Price } from '@devexperts/dxcharts-lite/dist/chart/model/scaling/viewport.model';
import { DrawingType } from '../model/drawing-types';
import DrawingsModel from '../model/drawings.model';
import { ViewPoint } from '../model/view-point';
import { Bounds } from '@devexperts/dxcharts-lite/dist/chart/model/bounds.model';
import { DataSeriesView } from '@devexperts/dxcharts-lite/dist/chart/model/data-series-view';
import { VisualSeriesPoint } from '@devexperts/dxcharts-lite/dist/chart/model/data-series.model';
export type RegressionTrendSectionType = 'up' | 'base' | 'down';
export interface RegressionTrendProperties extends CommonFigureProps {
    deviation: DeviationSettings;
    sections: RegressionTrendSectionSettings[];
    extendLines: boolean;
    pearsonR: boolean;
}
export interface DeviationSettings {
    useUpperDeviation: boolean;
    useLowerDeviation: boolean;
    source: DeviationSource;
}
export interface RegressionTrendSectionSettings {
    visible: boolean;
    backgroundColor: string;
    type: RegressionTrendSectionType;
    line: LineProperties;
    deviationCoef: number;
}
export declare const deviationSources: readonly ["Open", "Close", "High", "Low", "(H + L)/2", "(H + L + C)/3", "(O + H + L + C)/4"];
export type DeviationSource = (typeof deviationSources)[number];
export declare class RegressionTrend extends AbstractFigure<RegressionTrendProperties> {
    private formatterProvider;
    readonly points: number;
    type: DrawingType;
    regressionPoints: ViewPoint[];
    constructor(formatterProvider?: () => DateTimeFormatter);
    calculatePoints: (viewModel: DrawingViewModel, drawings: DrawingsModel) => void;
    onUp: (viewModel: DrawingViewModel, drawings: DrawingsModel) => void;
    calcRegressionPoints: (points: ViewPoint[], properties: RegressionTrendProperties, viewModel: DrawingViewModel) => [ViewPoint, ViewPoint, Pixel[]];
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: RegressionTrendProperties, chartBootstrap: Chart): void;
    customMoveFigureAction: () => () => undefined;
    getXAxisLabels: (chart: import("../drawings.config").ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: import("../drawings.config").ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
    private drawTrendLine;
}
export declare const calculateSectionPoints: (section: RegressionTrendSectionSettings, firstPoint: ViewPoint, lastPoint: ViewPoint, properties: RegressionTrendProperties, candles: VisualSeriesPoint[], regressionPoints: number[], view: DataSeriesView) => {
    first: number;
    second: number;
    deviation: number;
} | {
    first: number;
    second: number;
    deviation?: undefined;
};
export declare const getCandlePrice: (visualCandle: VisualCandle, sourceType: DeviationSource) => Price;
export declare const drawSectionLine: (ctx: ExtendedContext, props: LineProperties, v1: Vector, v2: Vector) => void;
export declare const fillSection: (ctx: ExtendedContext, props: RegressionTrendSectionSettings, v1: Vector, v2: Vector, v3: Vector, v4: Vector, bounds: Bounds) => void;
