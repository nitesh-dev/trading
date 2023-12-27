/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart, createChart, generateCandlesData } from '@devexperts/dxcharts-lite/dist/index';
import PlChart from './pl/plChart';
export interface ChartModule {
    attach: AttachChartModule;
}
interface AttachChartModule {
    <T extends Chart>(_chart: T): T;
}
interface ChartModules {
    drawings: ChartModule;
    studies: ChartModule;
    equivolume: ChartModule;
    heikinAshi: ChartModule;
    news: ChartModule;
    executedOrders: ChartModule;
    volumeLabel: ChartModule;
}
declare const modules: ChartModules;
export { createChart, Chart, PlChart, modules, generateCandlesData };
