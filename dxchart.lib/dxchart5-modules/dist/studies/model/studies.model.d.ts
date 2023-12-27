/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { PaneManager } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane-manager.component';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import { ScaleModel } from '@devexperts/dxcharts-lite/dist/chart/model/scale.model';
import { Subject } from 'rxjs';
import { FullChartConfigStudies } from '../studies.config';
import StudySeries, { StudyPoint, StudySeriesConfig } from './study-series';
export interface StudyPointDraft {
    idx?: number;
    val: number;
    timestamp: number;
}
export type TickValues = number[];
/**
 * Sub-model used to store common subjects.
 */
export declare class StudiesAddedRemovedSubModel {
    studyConfigAdded: Subject<StudySeries>;
    studyConfigRemoved: Subject<StudySeries>;
}
/**
 * Holds, controls study config and data updates.
 */
export declare class StudiesModel extends ChartBaseElement {
    private config;
    private chartModel;
    private canvasModel;
    private canvasBoundsContainer;
    private studiesAddedRemovedSubModel;
    private paneManager;
    private prevStudyConfig;
    studies: StudySeriesConfig[];
    overlays: Record<string, StudySeries>;
    underlays: Record<string, StudySeries>;
    underlayViewportModels: Record<string, ScaleModel>;
    studyConfigChanged: Subject<void>;
    studyDataChanged: Subject<void>;
    constructor(config: FullChartConfigStudies, chartModel: ChartModel, canvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer, studiesAddedRemovedSubModel: StudiesAddedRemovedSubModel, paneManager: PaneManager);
    protected doActivate(): void;
    get allStudies(): {
        [x: string]: StudySeries;
    };
    setStudiesConfig(studiesConfigs: Array<StudySeriesConfig>): void;
    private addStudy;
    private addDataSeriesLabelsProvider;
    private removeStudy;
    private removeStudyLabelsProvider;
    onStudyConfigChanged(): void;
    private recalculateLabels;
    setStudyData(uuid: string, data: Array<TickValues>): void;
    /**
     * Method takes only new study points, by slicing data array from last point index.
     * If data array is outdated or there is no data, method will replace all series data.
     * @param uuid - study unique id
     * @param data - all study data, method will slice it to get only new points
     * @doc-tags performance
     */
    updateStudyData(uuid: string, data: Array<TickValues>): void;
    private studiesDataChanged;
    private recalculateViewportModelsZoom;
    /**
     * Transforms the data from:
     *
     * [
     *   [0.2, 0.5], // for 1st candle
     *   [0.2, 0.6], // for 2nd candle
     *   [0.2, 0.7], // for 3rd candle
     * ]
     *
     * to:
     *
     * [
     *   [0.2, 0.2, 0.2], // 1st plot
     *   [0.5, 0.6, 0.7], // 2nd plot
     * ]
     *
     * @param candleToStudyDataSeries - candle-grouped studies data
     */
    private transformStudiesData;
    getHost(study: StudySeriesConfig): Record<string, StudySeries>;
}
export declare const collect: (list: StudySeriesConfig[], map: Record<string, StudySeriesConfig>) => void;
export declare const byNotIn: (map: Record<string, StudySeriesConfig>) => (study: StudySeriesConfig) => boolean;
export declare const findChanges: (prev: StudySeriesConfig[], next: StudySeriesConfig[]) => Array<Array<StudySeriesConfig>>;
export declare function indexStudyPoints(data: Array<StudyPointDraft>): Array<StudyPoint>;
