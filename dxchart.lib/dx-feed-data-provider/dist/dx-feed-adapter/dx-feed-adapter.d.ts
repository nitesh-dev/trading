/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Observable, Subject } from 'rxjs';
import { DxFeedCandle, DxFeedQuote, DxFeedSummary, DxFeedTradeETH } from '../dxfeed';
declare const periods: readonly ["t", "s", "m", "h", "d", "w", "mo", "y", "p", "v"];
export type AggregationPeriodDurationType = (typeof periods)[number];
export declare const candleAlignment: readonly ["s", "m"];
export type CandleAlignment = (typeof candleAlignment)[number];
export declare const priceType: readonly ["last", "mark", "bid", "ask"];
export type PriceType = (typeof priceType)[number];
type SubKeySymbolType = `${string}`;
type SubKeyPeriodType = `=${number}${AggregationPeriodDurationType}` | `=${AggregationPeriodDurationType}`;
type SubKeyThoType = `,tho=${boolean}` | '';
type SubKeyAlignmentType = `,a=${CandleAlignment}` | '';
type SubKeyPriceType = `,price=${PriceType}` | '';
/**
 * @name DxFeedCandleSubscriptionKey
 * @description
 * Subscription key is used to identify the subscription.
 * @example
 * ```ts
 * const subscriptionKey = 'symbol=AAPL|period=1h|tho=true|a=s|price=mark';
 * ```
 */
export type DxFeedCandleSubscriptionKey = `${SubKeySymbolType}{${SubKeyPeriodType}${SubKeyThoType}${SubKeyAlignmentType}${SubKeyPriceType}}`;
export interface AdapterSubscription<K extends string, T> {
    observable: Observable<[K, T]>;
    addSymbols(symbols: K[]): void;
    removeSymbols(symbols: K[]): void;
    unsubscribe(): void;
}
export interface TimeSeriesSubscription {
    setFromTime(fromTime: number): void;
}
export interface AdapterSubscriptionInternal<K extends string, T> extends AdapterSubscription<K, T> {
    subject: Subject<[K, T]>;
}
export interface DxFeedCandlesAdapter {
    subscribeCandles(subKeys: DxFeedCandleSubscriptionKey[], fromTime: number): AdapterSubscription<DxFeedCandleSubscriptionKey, DxFeedCandle[]> & TimeSeriesSubscription;
}
export interface DxFeedTradeETHAdapter {
    subscribeTradeETHs(symbols: string[]): AdapterSubscription<string, DxFeedTradeETH>;
}
export interface DxFeedSummaryAdapter {
    subscribeSummaries(symbols: string[]): AdapterSubscription<string, DxFeedSummary>;
}
export interface DxFeedQuotesAdapter {
    subscribeQuotes(symbols: string[]): AdapterSubscription<string, DxFeedQuote>;
}
export interface DxFeedAdapter extends DxFeedCandlesAdapter, DxFeedSummaryAdapter, DxFeedQuotesAdapter, DxFeedTradeETHAdapter {
    unsubscribeAll(): void;
}
export interface InternalSubs {
    unsubscribeAllInternal(): void;
}
export {};
