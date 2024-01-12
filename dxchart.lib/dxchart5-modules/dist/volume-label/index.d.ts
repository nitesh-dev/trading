/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModule } from '..';
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { ChartWithVolumeLabel } from './volume-label.config';
import { VolumeLabelComponent } from './volume-label.component';
export type ChartCore = {
    volumeLabelComponent?: VolumeLabelComponent;
} & Chart;
export declare const attachVolumeLabel: <T extends ChartCore>(_chart: T) => T & Chart & {
    config: import("./volume-label.config").FullChartConfigVolumeLabel;
    volumeLabel: VolumeLabelComponent;
};
export declare const VolumeLabel: ChartModule;
