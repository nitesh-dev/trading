/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ServiceDataProvider } from '@dx-private/dxchart5-react/dist/providers/chart-data-provider';
import { QuoteDataProvider } from './dx-feed-quote-data-provider';
import { SummaryDataProvider } from './dx-feed-summary-data-provider';
import { TradeETHDataProvider } from './dx-feed-trade-eth-data-provider';
export declare const createDxFeedServiceDataProvider: (summaryDataProvider: SummaryDataProvider, tradeETHProvider: TradeETHDataProvider, quoteDataProvider: QuoteDataProvider) => ServiceDataProvider;
