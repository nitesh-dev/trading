/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LabelGroup, YAxisLabelsProvider } from '@devexperts/dxcharts-lite/dist/chart/components/y_axis/price_labels/y-axis-labels.model';
import DrawingsModel from '../../model/drawings.model';
import Canvases from '../../canvases';
import { ChartWithDrawings } from '../../drawings.config';
export declare class DrawingsYAxisLabelsProvider implements YAxisLabelsProvider {
    private drawingsModel;
    private canvases;
    private chart;
    constructor(drawingsModel: DrawingsModel, canvases: Canvases, chart: ChartWithDrawings);
    getUnorderedLabels(): LabelGroup[];
}
