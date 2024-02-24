/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DxFeedQuotesAdapter, InternalSubs } from '../dx-feed-adapter';
import { AutoChannel } from '@dxfeed/dxlink-websocket-client';
export declare const createDxFeedQuotesAdapter: (channel: AutoChannel) => DxFeedQuotesAdapter & InternalSubs;