/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureBackgroundProperties } from './model/figure.model';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { DrawingViewModel } from '../model/drawing.view-model';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { Vector } from '../model/vector.model';
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { DrawingType } from '../model/drawing-types';
export interface CycleBracketsProperties extends CommonFigureProps {
    background: FigureBackgroundProperties;
}
export declare class CycleBrackets extends AbstractFigure<CycleBracketsProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    private drawingsY;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: CycleBracketsProperties, chart: Chart): void;
    getXAxisLabels: (chart: import("../drawings.config").ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: import("../drawings.config").ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
