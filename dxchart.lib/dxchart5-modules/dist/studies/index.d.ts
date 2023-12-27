/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { StudiesComponent } from './studies.component';
import { ChartWithStudies } from './studies.config';
import { ChartModule } from '../index';
export declare const attachStudiesComponent: <T extends Chart>(_chart: T) => T & {
    studies: StudiesComponent;
    config: import("./studies.config").FullChartConfigStudies;
} & Chart;
export declare const Studies: ChartModule;
