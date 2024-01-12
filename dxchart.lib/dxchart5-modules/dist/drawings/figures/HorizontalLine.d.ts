/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureStyleExtendProperties } from './model/figure.model';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/drawing.view-model';
export interface HorizontalLineFigureProperties extends Omit<CommonFigureProps, 'showTime'> {
    hitTestLineOffset: number;
    style: FigureStyleExtendProperties;
}
export declare class HorizontalLine extends AbstractFigure<HorizontalLineFigureProperties> {
    points: number;
    readonly type = "horizontal_line";
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: HorizontalLineFigureProperties): void;
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: import("../drawings.config").ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
