/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { PaneComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane.component';
import { DataSeriesType } from '@devexperts/dxcharts-lite/dist/chart/model/data-series.config';
import { ScaleModel } from '@devexperts/dxcharts-lite/dist/chart/model/scale.model';
import { FullChartConfigStudies } from '../studies.config';
import { StudySeriesModel } from './study-data-series.model';
import { YExtentComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pane/extent/y-extent-component';
export interface StudySeriesConfig {
    /**
     * @deprecated
     * @see for backwards compatibility with old study model
     */
    id: string;
    uuid: string;
    title: string;
    parameters: any[];
    lines: StudyLine[];
    overlaying: boolean;
    calculateFutureData: boolean;
    categories: string;
}
export interface StudyLine {
    title: string;
    studyLineType: DataSeriesType;
    thickness?: number;
    colors?: string[];
    visible?: boolean;
    offset?: number;
    labelVisible?: boolean;
    symbolMapping?: string;
}
export interface StudyPoint {
    idx: number;
    close: number;
    timestamp: number;
}
/**
 * Single study model. One study = multiple lines.
 * Contains config and data of exactly 1 study, like "MACD" or "Ichimoku".
 * @doc-tags chart-core,model
 */
export default class StudySeries {
    htId: number;
    private config;
    private chartModel;
    studyConfig: StudySeriesConfig;
    readonly pane: PaneComponent;
    uuid: string;
    hilo: [number, number];
    dataSeries: StudySeriesModel[];
    scale: ScaleModel;
    private _series;
    get series(): Array<StudyPoint[]>;
    set series(series: Array<StudyPoint[]>);
    extent: YExtentComponent;
    /**
     * Indicates that data in the series is outdated and has to be recalculated completly
     * @doc-tags performance
     */
    outdatedData: boolean;
    constructor(htId: number, config: FullChartConfigStudies, chartModel: ChartModel, studyConfig: StudySeriesConfig, pane: PaneComponent);
    /**
     * This method only modifies existing series, it doesn't replace all points
     * @param series
     * @doc-tags performance
     */
    updateSeries(series: Array<StudyPoint[]>): void;
    private linkDataSeriesModels;
    private studiesToVisualPoints;
    private studyPoints2DataSeries;
    updateConfig(studyConfig: StudySeriesConfig): void;
    private updateDataSeries;
    getSeriesByIndex(i: number): StudyPoint[];
    priceFormatter(value: number, precision?: number): string;
    private formatDecimal;
    getHighLow(): [number, number];
    /**
     * Identifies whether this study has extremums to calculate high low on.
     */
    hasExtremums(): boolean;
    clearData(): void;
}
