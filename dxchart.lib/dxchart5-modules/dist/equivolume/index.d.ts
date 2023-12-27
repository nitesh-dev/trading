/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { ChartModule } from '..';
import { DrawingsComponent } from '../drawings/drawings.component';
import { EquivolumeComponent } from './EquivolumeComponent';
import { ChartWithEquivolume } from './EquivolumeConfig';
type ChartCore = {
    drawingsComponent?: DrawingsComponent;
} & Chart;
export declare const attachEquivolumeComponent: <T extends ChartCore>(_chart: T) => T & Chart & {
    drawings?: DrawingsComponent | undefined;
    equivolume: EquivolumeComponent;
    config: import("./EquivolumeConfig").FullChartConfigEquivolume;
};
export declare const Equivolume: ChartModule;
export {};
