/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import { PLChartModel } from './PLChartModel';
import { NumericAxisLabel } from '@devexperts/dxcharts-lite/dist/chart/components/labels_generator/numeric-axis-labels.generator';
import { Point } from '@devexperts/dxcharts-lite/dist/chart/inputlisteners/canvas-input-listener.component';
export declare class PLCurrentPriceDotComponent extends ChartBaseElement {
    private plChartModel;
    constructor(plChartModel: PLChartModel);
    getLabel(): NumericAxisLabel | undefined;
    getDot(): Point | undefined;
    private isPriceOutOfChartBounds;
    private calculateDotPosition;
    private findFirstPlot;
    private calculateY;
    private interpolate;
    private calculateLabelValue;
}
