/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { VisualCandleCalculator } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import VisualCandle from '@devexperts/dxcharts-lite/dist/chart/model/visual-candle';
export declare const heikinAhsiCandleTransformer: VisualCandleCalculator;
export declare const ohlcPriceResolver: (vc: VisualCandle) => number[];
