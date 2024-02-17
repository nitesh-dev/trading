/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DxFeedEventToType, DxFeedEventType } from '../../dxfeed';
import Feed, { EventType } from '@dxfeed/api';
import { AdapterSubscriptionInternal } from '../dx-feed-adapter';
export declare const subscriptionFactory: <T extends DxFeedEventType>(dxFeed: Feed, eventType: EventType) => {
    createSubscription: (symbols: string[]) => AdapterSubscriptionInternal<string, DxFeedEventToType[T]>;
    unsubscribeAllInternal(): void;
};
