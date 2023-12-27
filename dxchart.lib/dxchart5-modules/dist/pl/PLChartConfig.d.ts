/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { FullChartConfig, PartialChartConfig } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { StringTMap } from '@devexperts/dxcharts-lite/dist/chart/utils/object.utils';
export type PLChart = Chart & {
    config: FullPLChartConfig;
};
export declare const applyPLConfig: <T extends FullChartConfig>(_config: T) => T & FullChartConfig & Required<PLChartSpecificConfig>;
export declare const PL_CONFIG_OVERRIDE: {
    components: {
        chart: {
            minCandles: number;
        };
        grid: {
            horizontal: boolean;
            dash: number[];
        };
        plChart: {
            lineStyles: {};
            priceDots: {
                enabled: boolean;
                lineDash: number[];
                labelFont: string;
                dotRadius: number;
            };
            zeroLine: {
                visible: boolean;
                lineWidth: number;
                lineDash: number[];
                lineCap: string;
            };
        };
    };
    colors: {
        plChart: {
            priceDots: {
                lineColor: string;
                labelBgColor: string;
                labelTextColor: string;
                dotColor: string;
            };
            chartZone: {
                positive: string;
                negative: string;
            };
            zeroLine: {
                lineColor: string;
            };
        };
    };
    drawingOrder: string[];
};
export declare const DEFAULT_PL_CHART_CONFIG: PLChartConfig;
export type PLChartConfig = PartialChartConfig & Partial<PLChartSpecificConfig>;
export type FullPLChartConfig = FullChartConfig & Required<PLChartSpecificConfig>;
export interface PLChartSpecificConfig {
    components: {
        plChart: {
            lineStyles: StringTMap<LineStyle>;
            zeroLine: {
                visible: boolean;
                lineDash?: Array<number>;
                lineWidth?: number;
                lineCap: CanvasLineCap;
            };
            priceDots: {
                enabled: true;
                lineDash: [number];
                labelFont: string;
                dotRadius: number;
            };
        };
    };
    colors: {
        plChart: {
            priceDots: {
                lineColor: string;
                labelBgColor: string;
                labelTextColor: string;
                dotColor: string;
            };
            chartZone: {
                positive: string;
                negative: string;
            };
            zeroLine: {
                lineColor?: string;
            };
        };
    };
}
export interface LineStyle {
    strokeStyle?: string;
    lineWidth?: number;
    lineDash?: Array<number>;
}
