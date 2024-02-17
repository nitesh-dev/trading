/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
export const DXFEED_CANDLE_FIELDS=['eventSymbol','eventFlags','high','low','time','open','close','volume'];export const DXFEED_QUOTE_FIELDS=['eventSymbol','askPrice','bidPrice'];export const DXFEED_SUMMARY_FIELDS=['eventSymbol','prevDayClosePrice'];export const DXFEED_TRADE_ETH_FIELDS=['eventSymbol','price'];export const instrumentFromKey=a=>a['slice'](0x0,a['indexOf']('{='));