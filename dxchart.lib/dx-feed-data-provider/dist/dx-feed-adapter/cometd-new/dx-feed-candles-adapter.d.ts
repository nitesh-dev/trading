/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import Feed from '@dxfeed/api';
import { DxFeedCandlesAdapter, InternalSubs } from '../dx-feed-adapter';
export declare const createDxFeedCandlesAdapter: (dxFeed: Feed) => DxFeedCandlesAdapter & InternalSubs;
