/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { DrawingModel } from './drawing.model';
import { DrawingType } from './drawing-types';
import { DateValuePoint, IndexValuePoint } from './point-event';
import { ViewPoint } from './view-point';
import { PaneComponent } from '@devexperts/dxcharts-lite/dist/chart/components/pane/pane.component';
export declare function cacheIndexes<T extends DrawingType>(point: DateValuePoint, drawingModel: DrawingModel<T>, chartModel: ChartModel): IndexValuePoint;
export declare function transformToView(pane: PaneComponent, point: IndexValuePoint): ViewPoint;
