/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import{isMetaCandle,isSnapshotBegin,isSnapshotFinalCandle,isTxPending}from'../dxfeed.utils';import{pipe}from'fp-ts/function';import{array}from'fp-ts';export const initOBRAlgorithm=a=>{const b={};return c=>{var d;const f=c['eventSymbol'],g=a();if(g===undefined)return;b[f]===undefined&&(b[f]={'pendingQueue':[],'isSnapshot':!![]});const h=b[f];isSnapshotBegin(c)&&(h['isSnapshot']=!![],h['pendingQueue']=[]);isSnapshotFinalCandle(c)&&h['isSnapshot']&&(h['isSnapshot']=![]);const i=isTxPending(c);((d=h['pendingQueue'][0x0])===null||d===void 0x0?void 0x0:d['time'])===c['time']?h['pendingQueue'][0x0]=c:h['pendingQueue']['push'](c);if(!h['isSnapshot']&&!i){const j=pipe(h['pendingQueue'],array['filter'](k=>!isMetaCandle(k)));h['pendingQueue']=[],j['length']!==0x0&&g['next']([f,j]);}};};