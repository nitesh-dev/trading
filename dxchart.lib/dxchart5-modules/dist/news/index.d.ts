/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { ChartModule } from '..';
import { NewsComponent } from './news.component';
import { ChartWithNews, FullChartConfigNews } from './news.config';
type ChartCore = {
    newsComponent?: NewsComponent;
} & Chart;
export declare const attachNewsComponent: <T extends ChartCore>(_chart: T) => T & Chart & {
    newsComponent: NewsComponent;
    config: FullChartConfigNews;
};
export declare const News: ChartModule;
export {};
