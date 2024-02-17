/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartDataProvider } from '@dx-private/dxchart5-react/dist/providers/chart-data-provider';
import { DxFeedAdapter } from '../dx-feed-adapter/dx-feed-adapter';
import { DxFeedCommonConfig } from '../dx-feed-adapter/dx-feed-adapter.config';
import { LazyLoadingConfig } from './candle-provider-adapter';
export declare const createDxFeedProviderWithAdapter: (config: DxFeedCommonConfig, lazyLoadingConfig?: LazyLoadingConfig) => ChartDataProvider;
/**
 * Used from outside to crete new data provider.
 * @doc-tags api
 */
export declare const createDxFeedProvider: (adapter: DxFeedAdapter, lazyLoadingConfig?: LazyLoadingConfig) => ChartDataProvider;
