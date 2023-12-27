/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartComponent } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.component';
import { VolumesComponent } from '@devexperts/dxcharts-lite/dist/chart/components/volumes/volumes.component';
import { YAxisComponent } from '@devexperts/dxcharts-lite/dist/chart/components/y_axis/y-axis.component';
import { DrawingsComponent } from '../drawings/drawings.component';
export declare class HeikinAshiComponent {
    constructor(chartComponent: ChartComponent, volumesComponent: VolumesComponent, yAxisComponent: YAxisComponent, drawingsComponent?: DrawingsComponent);
}
