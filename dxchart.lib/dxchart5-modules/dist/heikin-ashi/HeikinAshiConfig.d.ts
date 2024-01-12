/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { DrawingsComponent } from '../drawings/drawings.component';
import { FullChartColors } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { PriceMovement } from '@devexperts/dxcharts-lite/dist/chart/model/candle-series.model';
export declare const HEIKIN_ASHI = "heikinAshi";
declare module '@devexperts/dxcharts-lite/dist/chart/chart.config' {
    interface BarTypes {
        [HEIKIN_ASHI]: unknown;
    }
}
export type ChartWithHeikinAshi = Chart & {
    drawingsComponent?: DrawingsComponent;
};
export declare const resolveColorForLastCandle: (priceMovement: PriceMovement, colors: FullChartColors) => string;
