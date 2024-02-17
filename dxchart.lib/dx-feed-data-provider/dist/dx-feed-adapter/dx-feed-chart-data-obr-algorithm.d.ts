/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Subject } from 'rxjs';
import { DxFeedCandleSubscriptionKey } from './dx-feed-adapter';
import { DxFeedCandle } from '../dxfeed';
export declare const initOBRAlgorithm: (getSubscription: () => Subject<[DxFeedCandleSubscriptionKey, DxFeedCandle[]]> | undefined) => (e: DxFeedCandle) => void;
