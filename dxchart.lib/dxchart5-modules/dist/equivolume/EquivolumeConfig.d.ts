/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartConfigComponentsChart, FullChartColors, FullChartConfig, LineStyleTheme } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { EquivolumeComponent } from './EquivolumeComponent';
import { DrawingsComponent } from '../drawings/drawings.component';
import { VolumeColorResolver } from '@devexperts/dxcharts-lite/dist/chart/components/volumes/volumes.component';
import { LabelColorResolver } from '@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis.component';
export declare const EQUIVOLUME = "equivolume";
export type ChartWithEquivolume = Chart & {
    drawings?: DrawingsComponent;
    equivolume: EquivolumeComponent;
    config: FullChartConfigEquivolume;
};
export interface EquivolumeChartConfig {
    /**
     * Show close price for equivolumes bar type.
     */
    showClosePrice: boolean;
    lineWidth: number;
}
declare module '@devexperts/dxcharts-lite/dist/chart/chart.config' {
    interface BarTypes {
        equivolume: unknown;
    }
}
export type ChartConfigComponentsChartEquivolume = ChartConfigComponentsChart & {
    equivolume: EquivolumeChartConfig;
};
export type FullChartColorsEquivolume = FullChartColors & {
    equivolumeTheme: LineStyleTheme;
};
export type FullChartConfigEquivolume = {
    components: {
        chart: ChartConfigComponentsChartEquivolume;
    };
    colors: FullChartColorsEquivolume;
} & FullChartConfig;
export declare const resolveColorForEquivolume: VolumeColorResolver;
export declare const applyEquivolumeConfig: <T extends FullChartConfig>(_config: T) => T & {
    components: {
        chart: ChartConfigComponentsChartEquivolume;
    };
    colors: FullChartColorsEquivolume;
} & FullChartConfig;
export declare const resolveColorForLastCandle: LabelColorResolver;
