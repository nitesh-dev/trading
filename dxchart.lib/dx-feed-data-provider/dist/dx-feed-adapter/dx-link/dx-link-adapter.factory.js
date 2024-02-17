/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import{option}from'fp-ts';import{pipe}from'fp-ts/function';import{ReplaySubject}from'rxjs';export const subscriptionFactory=(a,b)=>{let c=undefined;const d=e=>{if(c)return c;const f=new ReplaySubject(0x1),g=k=>k['forEach'](l=>l['eventType']===b&&pipe(option['fromNullable'](l['eventSymbol']),option['map'](m=>pipe(option['fromNullable'](c),option['map'](n=>n['subject']['next']([m,l])))))),h=k=>{k['length']!==0x0&&a['subscription']({'add':k['map'](l=>({'symbol':l,'type':b}))});},i={'symbols':e};a['data']['subscribe'](g);const j={'addSymbols':k=>{const l=new Set(i['symbols']),m=k['filter'](o=>i['symbols']['indexOf'](o)===-0x1);k['forEach'](o=>l['add'](o));const n=Array['from'](l);i['symbols']=n,h(m);},'removeSymbols':k=>{const l=new Set(i['symbols']);k['forEach'](n=>l['delete'](n));const m=Array['from'](l);i['symbols']=m,a['subscription']({'remove':k['map'](n=>({'symbol':n,'type':b}))});},'subject':f,'observable':f['asObservable'](),'unsubscribe':()=>{f['complete'](),a['subscription']({'remove':i['symbols']['map'](k=>({'symbol':k,'type':b}))}),c=undefined;}};return c=j,j;};return{'createSubscription':d,'unsubscribeAllInternal'(){c===null||c===void 0x0?void 0x0:c['unsubscribe']();}};};