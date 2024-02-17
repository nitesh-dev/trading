/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import{finalize}from'rxjs/operators';import{observable}from'fp-ts-rxjs';import{none,some}from'fp-ts/Option';export const createDxFeedQuoteDataProvider=a=>{const b=a['subscribeQuotes']([]),c=e=>{return b['addSymbols']([e]),b['observable']['pipe'](observable['filterMap'](([f,g])=>{if(f===e&&g['bidPrice']!==undefined&&g['askPrice']!==undefined)return some({'bid':g['bidPrice'],'ask':g['askPrice']});return none;}),finalize(()=>b['removeSymbols']([e])));},d=e=>{b['removeSymbols']([e]);};return{'subscribeQuoteUpdate':c,'unsubscribeQuoteUpdate':d};};