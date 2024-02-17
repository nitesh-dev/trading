/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DxFeedTradeETHAdapter } from '../dx-feed-adapter/dx-feed-adapter';
import { Observable } from 'rxjs';
export interface TradeETHData {
    prePostMarketClose: number;
}
export interface TradeETHDataProvider {
    subscribeTradeETHUpdate(symbol: string): Observable<TradeETHData>;
    unsubscribeTradeETHUpdate(symbol: string): void;
}
export declare const createDxFeedTradeETHDataProvider: (adapter: DxFeedTradeETHAdapter) => TradeETHDataProvider;
