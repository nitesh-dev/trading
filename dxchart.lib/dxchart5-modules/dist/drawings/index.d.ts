/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { ChartModule } from '..';
import { ZoomViewComponent } from './components/zoom_view/zoom-view.component';
import { DrawingsComponent } from './drawings.component';
import { ChartWithDrawings } from './drawings.config';
type ChartCore = {
    drawings?: DrawingsComponent;
} & Chart;
export declare const attachDrawingsComponent: <T extends ChartCore>(_chart: T) => T & Chart & {
    drawings: DrawingsComponent;
    zoomViewComponent: ZoomViewComponent;
    config: import("./drawings.config").FullChartConfigDrawings;
};
export declare const Drawings: ChartModule;
export {};
