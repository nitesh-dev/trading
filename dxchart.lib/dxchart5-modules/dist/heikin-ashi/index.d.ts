/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { ChartModule } from '..';
import { DrawingsComponent } from '../drawings/drawings.component';
import { ChartWithHeikinAshi } from './HeikinAshiConfig';
type ChartCore = {
    drawings?: DrawingsComponent;
} & Chart;
export declare const attachHeikinAshiComponent: <T extends ChartCore>(_chart: T) => T & Chart & {
    drawingsComponent?: DrawingsComponent | undefined;
};
export declare const HeikinAshi: ChartModule;
export {};
