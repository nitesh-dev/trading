/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartComponent } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.component';
import { PaneManager } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane-manager.component';
import { VolumesComponent } from '@devexperts/dxcharts-lite/dist/chart/components/volumes/volumes.component';
import { XAxisComponent } from '@devexperts/dxcharts-lite/dist/chart/components/x_axis/x-axis.component';
import { YAxisComponent } from '@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis.component';
import EventBus from '@devexperts/dxcharts-lite/dist/chart/events/event-bus';
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import { DrawingsComponent } from '../drawings/drawings.component';
import { FullChartConfigEquivolume } from './EquivolumeConfig';
export declare class EquivolumeComponent extends ChartBaseElement {
    private eventBus;
    private chartComponent;
    private xAxis;
    private yAxis;
    private volumes;
    private config;
    private paneManager;
    private avgMainSeriesVolume;
    private cornerVolumes;
    constructor(eventBus: EventBus, chartComponent: ChartComponent, xAxis: XAxisComponent, yAxis: YAxisComponent, volumes: VolumesComponent, config: FullChartConfigEquivolume, paneManager: PaneManager, drawingsComponent?: DrawingsComponent);
    private updateAvgMainSeriesVolume;
    private calculateEquivolumeWidth;
    protected doActivate(): void;
    /**
     * Used to show close price for visual candles
     * For equivolume chart type only
     * @param isShow
     */
    setShowClosePrice(isShow: boolean): void;
}
