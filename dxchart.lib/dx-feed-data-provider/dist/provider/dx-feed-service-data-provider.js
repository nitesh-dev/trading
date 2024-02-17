/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import{combineLatest}from'rxjs';import{tap}from'rxjs/operators';import{pipe}from'fp-ts/function';import{observable}from'fp-ts-rxjs';export const createDxFeedServiceDataProvider=(a,b,c)=>{const d=(f,g)=>{pipe(combineLatest([a['subscribeSummaryUpdate'](f),b['subscribeTradeETHUpdate'](f),c['subscribeQuoteUpdate'](f)]),observable['map'](([h,i,j])=>Object['assign'](Object['assign'](Object['assign']({},h),i),j)),tap(g))['subscribe']();},e=f=>{a['unsubscribeSummaryUpdate'](f),b['unsubscribeTradeETHUpdate'](f),c['unsubscribeQuoteUpdate'](f);};return{'subscribeServiceData':d,'unsubscribeServiceData':e};};