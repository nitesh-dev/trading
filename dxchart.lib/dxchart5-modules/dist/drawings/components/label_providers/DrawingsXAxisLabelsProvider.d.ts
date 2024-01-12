/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import DrawingsModel from '../../model/drawings.model';
import { XAxisLabel, XAxisLabelsProvider } from '@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis-labels.model';
import { ChartWithDrawings } from '../../drawings.config';
export declare class DrawingsXAxisLabelsProvider implements XAxisLabelsProvider {
    private drawings;
    private chart;
    constructor(drawings: DrawingsModel, chart: ChartWithDrawings);
    getUnorderedLabels(): XAxisLabel[];
}
