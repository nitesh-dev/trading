/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AggregationPeriod } from '@dx-private/dxchart5-react/dist/chart/model/aggregation.model';
import { CandleDataProvider, ChartCandleData, ChartDataOptions } from '@dx-private/dxchart5-react/dist/providers/chart-data-provider';
import { RemoteData } from '@dx-private/dxchart5-react/dist/utils/adt/remote-data.adt';
import { Observable } from 'rxjs';
export interface LazyLoadingConfig {
    enabled: boolean;
    firstChunkSize: number;
    nextChunkSize: number;
    startLoadDistance: number;
}
export declare const DEFAULT_LAZY_LOADING_CONFIG: LazyLoadingConfig;
export interface OldChartData {
    data: ChartCandleData[];
    instrument: string;
    type: 'HISTORICAL' | 'LAST_CANDLE' | 'LAZY';
}
export interface OldCandleDataProvider {
    /**
     * Chart will call this method in the following cases:
     * - on initial load (if instrument is selected)
     * - when switching main instrument
     * - when adding secondary chart series
     *
     * Also, when calling requestMoreData, event here is expected with more data.
     *
     * @param symbol - symbol to subscribe to
     * @param aggregation - period
     * @param options - a list of options used while subscribing
     * @param options.extendedHours - with extended sessions
     * @param options.priceType - define price type of the candles
     * @param options.candleAlignment -  align the start of the candle
     * @param mainSymbol - (optional) will be provided in case of compare series requested - to specify the symbol of main series
     */
    subscribeHistoryData(symbol: string, aggregation: AggregationPeriod, options?: ChartDataOptions, mainSymbol?: string): Observable<RemoteData<Error, OldChartData>>;
    /**
     * In the same manner as subscribeHistoryData this method is called in the following cases:
     * - on initial load (if instrument is selected)
     * - when switching main instrument
     * - when adding secondary chart series
     * Chart requests updates for last candle using this method.
     * subscribeHistoryData should provide only aggregated history data
     * subscribeLastCandleUpdates should provide the latest data from the market.
     * @param symbol
     * @param aggregation
     * @param options
     */
    subscribeLastCandleUpdates(symbol: string, aggregation: AggregationPeriod, options?: ChartDataOptions): Observable<ChartCandleData>;
    /**
     * IMPORTNANT! If no more data is available send an empty array, so chart know that the request if fulfield.
     * @param symbol
     * @param aggregation
     * @param options
     * @param fromTime - if specified, then chart wants to recieve the lazy data starting from this timestamp
     */
    requestMoreData(symbol: string, aggregation?: AggregationPeriod, options?: ChartDataOptions, fromTime?: number): void;
    unsubscribeData(symbol: string, aggregation?: AggregationPeriod, options?: ChartDataOptions): void;
}
export declare const createCandleAdapter: (feed: OldCandleDataProvider, lazyLoadingConfig: LazyLoadingConfig) => CandleDataProvider;
