/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DxFeedSummaryAdapter } from '../dx-feed-adapter/dx-feed-adapter';
import { Observable } from 'rxjs';
export interface SummaryData {
    prevDayClosePrice: number;
}
export interface SummaryDataProvider {
    subscribeSummaryUpdate(symbol: string): Observable<SummaryData>;
    unsubscribeSummaryUpdate(symbol: string): void;
}
export declare const createDxFeedSummaryDataProvider: (adapter: DxFeedSummaryAdapter) => SummaryDataProvider;
