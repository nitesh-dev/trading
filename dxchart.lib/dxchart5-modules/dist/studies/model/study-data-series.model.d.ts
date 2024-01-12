/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { YExtentComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pane/extent/y-extent-component';
import { DataSeriesConfig } from '@devexperts/dxcharts-lite/dist/chart/model/data-series.config';
import { DataSeriesModel, VisualSeriesPoint } from '@devexperts/dxcharts-lite/dist/chart/model/data-series.model';
import { AtLeastOne } from '@devexperts/dxcharts-lite/dist/chart/utils/object.utils';
import { StudyPoint } from './study-series';
/**
 * Represents studies data series.
 * Used only for optimization at the moment
 * @doc-tags performance
 */
export declare class StudySeriesModel extends DataSeriesModel<StudyPoint, VisualSeriesPoint> {
    readonly extentComponent: YExtentComponent;
    constructor(extentComponent: YExtentComponent, id: string, htId: number, _config: AtLeastOne<DataSeriesConfig>);
    /**
     * Tricky update based on assumption what series doesn't have any gaps and presented as a single array
     */
    updateDataPoint(point: StudyPoint, pointIdx: number): void;
}
