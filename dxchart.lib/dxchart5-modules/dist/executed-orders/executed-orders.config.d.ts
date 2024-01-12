/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { ExecutedOrdersComponent } from './executed-orders.component';
import { FullChartColors, FullChartConfig } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
export interface ExecutedOrdersLabelsConfig {
    visible: boolean;
    font: ExecutedOrdersLabelsConfigFont;
    margin: number;
}
export interface ExecutedOrdersLabelsConfigFont {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
}
export interface ExecutedOrdersConfig {
    visible: boolean;
    ordersMargin: number;
    showExactPrice: boolean;
    labels: ExecutedOrdersLabelsConfig;
}
export type ChartWithExecutedOrders = Chart & {
    executedOrders: ExecutedOrdersComponent;
};
export type FullChartConfigExecutedOrders = {
    components: {
        executedOrders: ExecutedOrdersConfig;
    };
    colors: {
        executedOrdersTheme: ExecutedOrdersColors;
    };
} & FullChartConfig;
export interface ExecutedOrdersColors {
    sell: {
        arrows: string;
        exactPriceLine: string;
        labels: string;
    };
    buy: {
        arrows: string;
        exactPriceLine: string;
        labels: string;
    };
}
export type FullChartColorsExecutedOrders = FullChartColors & {
    executedOrdersTheme: ExecutedOrdersColors;
};
export declare const applyExecutedOrdersConfig: <T extends FullChartConfig>(_config: T) => T & {
    components: {
        executedOrders: ExecutedOrdersConfig;
    };
    colors: {
        executedOrdersTheme: ExecutedOrdersColors;
    };
} & FullChartConfig;
