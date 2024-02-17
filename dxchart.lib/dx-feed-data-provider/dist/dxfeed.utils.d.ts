/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DxFeedCandle } from './dxfeed';
export declare const isMetaCandle: (data: DxFeedCandle) => boolean;
export declare const isSnapshotFinalCandle: (data: DxFeedCandle) => boolean;
export declare const isTxPending: (data: DxFeedCandle) => boolean;
export declare const isSnapshotBegin: (data: DxFeedCandle) => boolean;
