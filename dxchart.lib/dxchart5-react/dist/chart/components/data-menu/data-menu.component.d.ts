/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { ChartSettings, ChartType } from '../../model/chart.model';
import { RCMenuProps } from '../../../chart-kit/Popover/popover-menu-generic';
import { DataMenuSelectedSeriesType } from '../../view-models/data/data-menu.vm';
import { ChartReactConfig } from '../../../config/chart-react-config';
import { OrderData } from '../../model/trading/order.model';
import { ReorderType } from '../right-click-menu/right-click-menu-reorder-btns.component';
import { PriceType } from '../../../providers/chart-data-provider';
export interface DataMenuProps extends RCMenuProps {
    readonly settings: ChartSettings;
    readonly chartReactConfig: ChartReactConfig;
    readonly selectedSeries: DataMenuSelectedSeriesType;
    readonly onChangeSeriesChartType: (type: ChartType) => void;
    readonly palette: string[];
    readonly onChangeSeriesColor: (color: string) => void;
    readonly onChangePriceType: (type: PriceType) => void;
    readonly onCreateOrder: (orderData: OrderData) => void;
    readonly onSeriesReorder: (reorderType: ReorderType) => void;
}
export declare const DataMenu: React.NamedExoticComponent<DataMenuProps>;
