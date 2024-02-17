/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
const SNAPSHOT_EVENTS={'TX_PENDING':0x1,'REMOVE_EVENT':0x2,'BEGIN':0x4,'END':0x8,'SNIP':0x10,'SNAPSHOT_MODE':0x40};export const isMetaCandle=a=>a['eventFlags']!==undefined&&(a['eventFlags']&SNAPSHOT_EVENTS['REMOVE_EVENT'])!==0x0;export const isSnapshotFinalCandle=a=>a['eventFlags']!==undefined&&((a['eventFlags']&SNAPSHOT_EVENTS['END'])!==0x0||(a['eventFlags']&SNAPSHOT_EVENTS['SNIP'])!==0x0);export const isTxPending=a=>a['eventFlags']!==undefined&&(a['eventFlags']&SNAPSHOT_EVENTS['TX_PENDING'])!==0x0;export const isSnapshotBegin=a=>a['eventFlags']!==undefined&&(a['eventFlags']&SNAPSHOT_EVENTS['BEGIN'])!==0x0;