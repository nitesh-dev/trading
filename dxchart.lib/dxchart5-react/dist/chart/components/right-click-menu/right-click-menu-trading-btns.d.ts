/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import React from 'react';
import { OrderQuantity } from '../../view-models/trading/order-entry.view-model';
import { OrderData } from '../../model/trading/order.model';
export interface MainSeriesTradingData {
    readonly candlePrice: string;
    readonly marketPrice: string;
    readonly quantity: OrderQuantity;
}
export declare const RightClickMenuTradingButtonsTypes: {
    readonly buyMarket: "buyMarket";
    readonly sellMarket: "sellMarket";
    readonly createLimit: "createLimit";
    readonly createStop: "createStop";
};
export interface RightClickMenuTradingBtnsProps {
    readonly mainSeriesData: MainSeriesTradingData;
    readonly createOrder: (orderData: OrderData) => void;
}
export declare const RightClickMenuTradingButtons: React.NamedExoticComponent<RightClickMenuTradingBtnsProps>;
