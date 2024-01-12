/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
import { LineProperties } from '../drawings.config';
import DrawingsModel from '../model/drawings.model';
import { DrawingType } from '../model/drawing-types';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { AbstractFigure, FigureXYAxisLabelsProperties } from '../figures/model/figure.model';
import { DrawingViewModel } from '../model/drawing.view-model';
import { Vector } from '../model/vector.model';
export interface MagnifyingToolTimeRangeProperties extends FigureXYAxisLabelsProperties {
    line: LineProperties;
    background: {
        fillStyle: string;
    };
    projection: LineProperties;
    text: {
        textSize: string;
        textBg: string;
        backgroundOffsetWidth: number;
        backgroundOffsetHeight: number;
    };
}
export declare class MagnifyingToolTimeRange extends AbstractFigure<MagnifyingToolTimeRangeProperties> {
    private formatterProvider;
    points: number;
    type: DrawingType;
    constructor(formatterProvider?: () => DateTimeFormatter);
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: MagnifyingToolTimeRangeProperties, chartBootstrap: Chart): void;
    getXAxisLabels: (chart: import("../drawings.config").ChartWithDrawings, viewModel: DrawingViewModel, properties: import("../figures/model/figure.model").CommonFigureProps, points: Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    beforeCommit: (drawingViewModel: DrawingViewModel, drawings?: DrawingsModel) => boolean;
}
