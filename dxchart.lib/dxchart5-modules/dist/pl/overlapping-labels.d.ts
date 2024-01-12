/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { FullChartConfig } from '@devexperts/dxcharts-lite/dist/chart/chart.config';
import { NumericAxisLabel } from '@devexperts/dxcharts-lite/dist/chart/components/labels_generator/numeric-axis-labels.generator';
import { ViewportModel } from '@devexperts/dxcharts-lite/dist/chart/model/scaling/viewport.model';
export declare const createRemoveOverlappingLabelsFn: (config: FullChartConfig, ctx: CanvasRenderingContext2D, viewportModel: ViewportModel) => (labels: NumericAxisLabel[]) => NumericAxisLabel[];
