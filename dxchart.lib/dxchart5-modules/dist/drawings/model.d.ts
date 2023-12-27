/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { DateValuePoint, IndexValuePoint } from './model/point-event';
import { DrawingModel } from './model/drawing.model';
import { ChartModel } from '@devexperts/dxcharts-lite/dist/chart/components/chart/chart.model';
import { DrawingType } from './model/drawing-types';
export declare function cacheIndexes<T extends DrawingType>(point: DateValuePoint, drawingModel: DrawingModel<T>, chartModel: ChartModel): IndexValuePoint;
