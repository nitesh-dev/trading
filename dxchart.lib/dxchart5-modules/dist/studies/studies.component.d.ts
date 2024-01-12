/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { CanvasBoundsContainer } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import { ChartComponent } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.component';
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { PaneManager } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane-manager.component';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import { HoverProducerComponent } from '@devexperts/dxcharts-lite/dist/chart/inputhandlers/hover-producer.component';
import { Observable } from 'rxjs';
import { FullChartConfigStudies } from './studies.config';
import { StudiesModel } from './model/studies.model';
import { StudySeriesConfig } from './model/study-series';
/**
 * Concentrates all studies initialization, control, calculation logic.
 */
export declare class StudiesComponent extends ChartBaseElement {
    private config;
    private canvasBoundsContainer;
    private chartComponent;
    model: StudiesModel;
    constructor(config: FullChartConfigStudies, chartModel: ChartModel, canvasModel: CanvasModel, canvasBoundsContainer: CanvasBoundsContainer, paneManager: PaneManager, chartComponent: ChartComponent, hoverProducer: HoverProducerComponent);
    /**
     * Sets studies component visibility.
     * @param visible
     */
    setStudiesVisible(visible?: boolean): void;
    /**
     * Sets the studies data. Data is untransformed: candles to study values.
     * Example: 2 study plots
     * [
     *   [0.2, 0.5], // for 1st candle
     *   [0.2, 0.6], // for 2nd candle
     *   [0.2, 0.7], // for 3rd candle
     * ]
     * @param uuid - id of study
     * @param data - data
     */
    setStudyData(uuid: string, data: Array<Array<number>>): void;
    /**
     * Method takes only new study points, by slicing data array from last point index.
     * If data array is outdated or there is no data, method will replace all series data.
     * @param uuid - study unique id
     * @param data - all study data, method will slice it to get only new points
     * @doc-tags performance
     */
    updateStudyData(uuid: string, data: Array<Array<number>>): void;
    /**
     * Updates the studies list in chart.
     * Recalculates the studies data after new studies are set.
     *
     * @param studiesConfig - the new studies list (config not data)
     */
    updateStudyConfig(studiesConfig: Array<StudySeriesConfig>): void;
    /**
     * Sets studies lastValue mode:
     * if lastValue is 'viewport' study labels will show last visible on the screen study series value
     * if lastValue is  'series'  study labels will show last overall study series value (even if not visible)
     * @param mode
     */
    setLabelsLastValue(mode: 'viewport' | 'series'): void;
    observeStudiesConfigChanged(): Observable<void>;
}
