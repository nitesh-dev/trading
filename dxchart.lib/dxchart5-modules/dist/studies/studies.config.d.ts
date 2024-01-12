/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { Chart } from '@devexperts/dxcharts-lite/dist';
import { CursorType, FullChartColors, FullChartConfig } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { StudiesHover } from './model/studies-hover';
import { StudySeriesConfig } from './model/study-series';
import { StudiesComponent } from './studies.component';
declare module '@devexperts/dxcharts-lite/dist/chart/inputhandlers/hover-producer.component' {
    interface HoverParts {
        studiesHover: StudiesHover;
    }
}
export type ChartWithStudies = {
    studies: StudiesComponent;
    config: FullChartConfigStudies;
} & Chart;
export interface ChartConfigComponentsStudies {
    visible: boolean;
    /**
     * List of study configurations. Requires study data as well, use API to set the data.
     */
    studies?: Array<StudySeriesConfig>;
    histogramLineWidth: number;
    /**
     * Use when you need to format high precision values up to 10 signs after 0.
     */
    useHighPrecisionFormat?: boolean;
    cursors: {
        main: CursorType;
    };
    /**
     * 'viewport' study labels will show last visible on the screen study series value.
     * 'series'  study labels will show last overall study series value (even if not visible).
     */
    labels: {
        lastValue: 'series' | 'viewport';
    };
}
export interface StudiesLabelsTheme {
    textColor: string;
    invertedTextColor: string;
}
export type FullChartConfigStudies = {
    components: {
        studies: ChartConfigComponentsStudies;
    };
    colors: {
        labels: {
            studies: StudiesLabelsTheme;
        };
    };
} & FullChartConfig;
export type FullChartColorsStudies = {
    labels: {
        studies: StudiesLabelsTheme;
    };
} & FullChartColors;
export declare const defaultStudiesComponentConfig: ChartConfigComponentsStudies;
export declare const applyStudiesComponentConfig: <T extends FullChartConfig>(_config: T) => T & {
    components: {
        studies: ChartConfigComponentsStudies;
    };
    colors: {
        labels: {
            studies: StudiesLabelsTheme;
        };
    };
} & FullChartConfig;
