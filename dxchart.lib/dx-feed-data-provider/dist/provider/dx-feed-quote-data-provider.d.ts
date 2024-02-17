/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DxFeedQuotesAdapter } from '../dx-feed-adapter/dx-feed-adapter';
import { Observable } from 'rxjs';
export interface QuoteData {
    bid: number;
    ask: number;
}
export interface QuoteDataProvider {
    subscribeQuoteUpdate(symbol: string): Observable<QuoteData>;
    unsubscribeQuoteUpdate(symbol: string): void;
}
export declare const createDxFeedQuoteDataProvider: (adapter: DxFeedQuotesAdapter) => QuoteDataProvider;
