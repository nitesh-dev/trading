/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { NewsComponent } from './news.component';
import { FullChartColors, FullChartConfig } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
export type ChartWithNews = Chart & {
    newsComponent: NewsComponent;
    config: FullChartConfigNews;
};
export type FullChartConfigNews = {
    components: {
        news: ChartConfigComponentsNews;
    };
    colors: {
        newsTheme: NewsTheme;
    };
} & FullChartConfig;
export interface NewsTheme {
    backgroundColor: string;
}
export type FullChartColorsNews = {
    newsTheme: NewsTheme;
} & FullChartColors;
export declare const applyNewsConfig: <T extends FullChartConfig>(_config: T) => T & {
    components: {
        news: ChartConfigComponentsNews;
    };
    colors: {
        newsTheme: NewsTheme;
    };
} & FullChartConfig;
export type NewsDrawerType = 'NEWS' | 'HIT_TEST_NEWS';
export interface ChartConfigComponentsNews {
    visible: boolean;
    radius: {
        common: number;
        hovered: number;
    };
    hitTest: {
        radius: number;
    };
}
