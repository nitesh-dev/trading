/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export type DxFeedEventType = 'Quote' | 'Summary' | 'TradeETH';
export type DxFeedTimeSeriesEventType = 'Candle';
export type DxFeedEventTypes = DxFeedEventType | DxFeedTimeSeriesEventType;
export type DxFeedEvent = DxFeedTradeETH | DxFeedCandle | DxFeedQuote | DxFeedSummary;
export interface DxFeedEventToType {
    Summary: DxFeedSummary;
    TradeETH: DxFeedTradeETH;
    Quote: DxFeedQuote;
    Candle: DxFeedCandle;
}
export interface DxFeedTradeETH {
    eventSymbol?: string;
    eventTime?: number;
    time?: number;
    timeNanoPart?: number;
    sequence?: number;
    exchangeCode?: string;
    price?: number;
    change?: number;
    size?: number;
    dayId?: number;
    dayVolume?: number;
    dayTurnover?: number;
    tickDirection?: string;
}
export interface DxFeedCandle {
    eventSymbol?: string;
    eventTime?: number;
    eventFlags?: number;
    index?: number;
    time?: number;
    sequence?: number;
    count?: number;
    open?: number;
    high?: number;
    low?: number;
    close?: number;
    volume?: number;
    vwap?: number;
    bidVolume?: number;
    askVolume?: number;
    impVolatility?: number;
    openInterest?: number;
}
export interface DxFeedQuote {
    eventSymbol?: string;
    eventTime?: number;
    sequence?: number;
    timeNanoPart?: number;
    bidTime?: number;
    bidExchangeCode?: string;
    bidPrice?: number;
    bidSize?: number;
    askTime?: number;
    askExchangeCode?: string;
    askPrice?: number;
    askSize?: number;
}
export interface DxFeedSummary {
    eventSymbol?: string;
    eventTime?: number;
    dayId?: number;
    dayOpenPrice?: number;
    dayHighPrice?: number;
    dayLowPrice?: number;
    dayClosePrice?: number;
    dayClosePriceType?: string;
    prevDayId?: number;
    prevDayClosePrice?: number;
    prevDayClosePriceType?: string;
    prevDayVolume?: number;
    openInterest?: number;
}
export interface DxFeedSubscription<T extends DxFeedEvent> {
    addSymbols(...symbols: string[]): void;
    removeSymbols(...symbols: string[]): void;
    setSymbols(symbols: string[]): void;
    close(): void;
    onEvent(event: T): void;
}
export interface DxFeedTimeSeriesSubscription<T extends DxFeedEvent> extends DxFeedSubscription<T> {
    setFromTime: (time: number) => void;
}
export interface DxFeed {
    state: {
        connected: boolean;
    };
    connect(url: string): void;
    setAuthToken(token: string): void;
    createSubscription<T extends DxFeedEventType>(events: DxFeedEventType): DxFeedSubscription<DxFeedEventToType[T]>;
    createTimeSeriesSubscription<T extends DxFeedTimeSeriesEventType>(events: T): DxFeedTimeSeriesSubscription<DxFeedEventToType[T]>;
}
export interface DX {
    feed: DxFeed;
}
