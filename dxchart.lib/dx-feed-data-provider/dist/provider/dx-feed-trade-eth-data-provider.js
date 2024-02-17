/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import{finalize,tap}from'rxjs/operators';import{observable}from'fp-ts-rxjs';import{none,some}from'fp-ts/Option';export const createDxFeedTradeETHDataProvider=a=>{const b=a['subscribeTradeETHs']([]),c=e=>{return b['addSymbols']([e]),b['observable']['pipe'](observable['filterMap'](([f,g])=>{if(f===e&&g['price']!==undefined)return some({'prePostMarketClose':g['price']});return none;}),tap(f=>f),finalize(()=>b['removeSymbols']([e])));},d=e=>{b['removeSymbols']([e]);};return{'subscribeTradeETHUpdate':c,'unsubscribeTradeETHUpdate':d};};