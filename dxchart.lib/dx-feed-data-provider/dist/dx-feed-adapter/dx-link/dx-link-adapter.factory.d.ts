/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { AutoChannel } from '@dxfeed/dxlink-websocket-client';
import { DxFeedEventToType, DxFeedEventType } from '../../dxfeed';
import { AdapterSubscriptionInternal } from '../dx-feed-adapter';
export declare const subscriptionFactory: <T extends DxFeedEventType>(channel: AutoChannel, type: string) => {
    createSubscription: (symbols: string[]) => AdapterSubscriptionInternal<string, DxFeedEventToType[T]>;
    unsubscribeAllInternal(): void;
};
