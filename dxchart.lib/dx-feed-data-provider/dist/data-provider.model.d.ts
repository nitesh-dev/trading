/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DxFeedCandleSubscriptionKey } from './dx-feed-adapter/dx-feed-adapter';
export declare const DXFEED_CANDLE_FIELDS: readonly ["eventSymbol", "eventFlags", "high", "low", "time", "open", "close", "volume"];
export declare const DXFEED_QUOTE_FIELDS: readonly ["eventSymbol", "askPrice", "bidPrice"];
export declare const DXFEED_SUMMARY_FIELDS: readonly ["eventSymbol", "prevDayClosePrice"];
export declare const DXFEED_TRADE_ETH_FIELDS: readonly ["eventSymbol", "price"];
export declare const instrumentFromKey: (key: DxFeedCandleSubscriptionKey) => string;
