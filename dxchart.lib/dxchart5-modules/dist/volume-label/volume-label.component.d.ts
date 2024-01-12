/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { VolumesComponent } from '@devexperts/dxcharts-lite/dist/chart/components/volumes/volumes.component';
import { LabelGroup } from '@devexperts/dxcharts-lite/dist/chart/components/y_axis/price_labels/y-axis-labels.model';
import { YAxisComponent } from '@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis.component';
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import { FullChartConfigVolumeLabel } from './volume-label.config';
import { BehaviorSubject } from 'rxjs';
export declare class VolumeLabelComponent extends ChartBaseElement {
    private config;
    private chartModel;
    private mainYAxis;
    private volumes;
    volumeLabelVisibilitySubject: BehaviorSubject<boolean>;
    constructor(config: FullChartConfigVolumeLabel, chartModel: ChartModel, mainYAxis: YAxisComponent, volumes: VolumesComponent);
    protected doActivate(): void;
    /**
     * Sets the visibility of the volumes label
     * @param {boolean} visible - Whether the volumes label should be visible or not
     * @returns {void}
     */
    setVisible(visible: boolean): void;
    getUnorderedLabels: () => LabelGroup[];
    getUnorderedLabelsSeparate: () => LabelGroup[];
    private getLabelDrawConfig;
}
