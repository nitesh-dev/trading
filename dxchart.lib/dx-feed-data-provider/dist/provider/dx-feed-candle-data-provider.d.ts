/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AggregationPeriod } from '@dx-private/dxchart5-react/dist/chart/model/aggregation.model';
import { ChartDataOptions } from '@dx-private/dxchart5-react/dist/providers/chart-data-provider';
import { AggregationPeriodDurationType, DxFeedCandleSubscriptionKey, DxFeedCandlesAdapter } from '../dx-feed-adapter/dx-feed-adapter';
import { LazyLoadingConfig, OldCandleDataProvider } from './candle-provider-adapter';
export declare const createDxFeedCandleDataProvider: (adapter: DxFeedCandlesAdapter, lazyLoadingConfig?: LazyLoadingConfig) => OldCandleDataProvider;
export declare const periodToString: (chartPeriod: AggregationPeriod, options?: ChartDataOptions) => `${number}${AggregationPeriodDurationType}` | `${AggregationPeriodDurationType}`;
export declare const toSubscriptionKey: (symbol: string, aggregation: AggregationPeriod, options?: ChartDataOptions) => DxFeedCandleSubscriptionKey;
/**
 * This function returns max fromTime within which we will have all available data from DxFeed
 * https://kb.dxfeed.com/display/DS/Charting+Overview#ChartingOverview-Historicalcandledataavailability
 * @param aggregation {AggregationPeriod}
 */
export declare const getMaxFromTimeForAggregation: (aggregation: AggregationPeriod) => number;
