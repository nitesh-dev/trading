/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { PLChart } from './PLChartConfig';
export declare const attachPLComponent: <T extends Chart>(_chart: T) => T & Chart & {
    config: import("./PLChartConfig").FullPLChartConfig;
};
