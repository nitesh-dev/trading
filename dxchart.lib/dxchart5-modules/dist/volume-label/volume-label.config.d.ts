/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { FullChartConfig } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { VolumeLabelComponent } from './volume-label.component';
export type ChartWithVolumeLabel = Chart & {
    config: FullChartConfigVolumeLabel;
    volumeLabel: VolumeLabelComponent;
};
export interface ChartConfigVolumeLabel {
    visible: boolean;
}
interface VolumeLabelTheme {
    boxColor: string;
    upColor: string;
    downColor: string;
    noneColor: string;
}
export type FullChartConfigVolumeLabel = {
    components: {
        volumeLabel: ChartConfigVolumeLabel;
    };
    colors: {
        labels: {
            volumeLabel: VolumeLabelTheme;
        };
    };
} & FullChartConfig;
export declare const applyVolumeLabelConfig: <T extends FullChartConfig>(_config: T) => T & {
    components: {
        volumeLabel: ChartConfigVolumeLabel;
    };
    colors: {
        labels: {
            volumeLabel: VolumeLabelTheme;
        };
    };
} & FullChartConfig;
export {};
