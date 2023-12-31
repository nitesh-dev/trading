/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AbstractFigure, CommonFigureProps, FigureLineArrowsProperties } from './model/figure.model';
import { DrawingType } from '../model/drawing-types';
import { DrawingViewModel } from '../model/drawing.view-model';
import { ExtendedContext } from '../components/extended_context/ExtendedContext';
import { PointEvent } from '../model/point-event';
import { DateTimeFormatter } from '@devexperts/dxcharts-lite/dist/chart/model/date-time.formatter';
export interface PathProperties extends CommonFigureProps {
    arrows: Pick<FigureLineArrowsProperties, 'start' | 'end'>;
}
export declare class Path extends AbstractFigure<PathProperties> {
    private formatterProvider;
    points: number;
    readonly type: DrawingType;
    readonly commitOnEnter: boolean;
    constructor(formatterProvider?: () => DateTimeFormatter);
    beforeCommit: (drawingViewModel: DrawingViewModel) => boolean;
    /**
     * This code is responsible for finishing drawing by double click
     * but actually it checks if the point is close to the previous one, so it might not be a double click
     */
    pointConstraint: (point: PointEvent, model: DrawingViewModel) => boolean;
    draw(viewModel: DrawingViewModel, ctx: ExtendedContext, properties: PathProperties): void;
    getXAxisLabels: (chart: import("../drawings.config").ChartWithDrawings, viewModel: DrawingViewModel, properties: CommonFigureProps, points: import("../model/vector.model").Vector[]) => import("@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model").XAxisLabel[];
    getYAxisLabels: (viewModel: DrawingViewModel, ctx: CanvasRenderingContext2D, chart: import("../drawings.config").ChartWithDrawings) => import("@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis-labels.drawer").YAxisLabelDrawProps[];
}
