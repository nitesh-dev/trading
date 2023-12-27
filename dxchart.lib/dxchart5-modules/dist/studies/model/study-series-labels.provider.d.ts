/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { LabelGroup, YAxisLabelsProvider } from '@devexperts/dxcharts-lite/dist/chart/components/y_axis/price_labels/y-axis-labels.model';
import { BoundsProvider } from '@devexperts/dxcharts-lite/dist/chart/model/bounds.model';
import { YAxisConfig } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { FullChartConfigStudies } from '../studies.config';
import StudySeries from './study-series';
export declare class StudySeriesLabelsProvider implements YAxisLabelsProvider {
    private studySeries;
    private chartsColorsConfig;
    yAxisBoundsProvider: BoundsProvider;
    yAxisState: YAxisConfig;
    constructor(studySeries: StudySeries, chartsColorsConfig: FullChartConfigStudies['colors'], yAxisBoundsProvider: BoundsProvider, yAxisState: YAxisConfig);
    /**
     * Returns an array of LabelGroup objects that contain VisualYAxisLabel objects.
     * The labels are unordered and are based on the last data series point or the last visual series point, depending on the configuration.
     * The labels are formatted using the series value formatter.
     * The label appearance type and draw configuration are also based on the configuration.
     * @returns {LabelGroup[]} An array of LabelGroup objects that contain VisualYAxisLabel objects.
     */
    getUnorderedLabels(): LabelGroup[];
    private getLabelDrawConfig;
}
