/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AutoChannel } from '@dxfeed/dxlink-websocket-client';
import { DxFeedCandlesAdapter, InternalSubs } from '../dx-feed-adapter';
export declare const createDxFeedCandlesAdapter: (channel: AutoChannel) => DxFeedCandlesAdapter & InternalSubs;
