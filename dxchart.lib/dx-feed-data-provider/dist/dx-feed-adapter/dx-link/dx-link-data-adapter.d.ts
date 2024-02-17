/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DxFeedAdapter } from '../dx-feed-adapter';
import { DxFeedCommonConfig } from '../dx-feed-adapter.config';
export declare const createDxLinkAdapter: (config?: DxFeedCommonConfig) => Promise<DxFeedAdapter>;
