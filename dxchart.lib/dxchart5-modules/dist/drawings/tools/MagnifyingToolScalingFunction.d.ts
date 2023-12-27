/** Copyright ©2023 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import DrawingsModel from '../model/drawings.model';
import { DrawingViewModel } from '../model/drawing.view-model';
import { Chart } from '@devexperts/dxcharts-lite/dist';
export declare function setMagnifiedScale(drawingViewModel: DrawingViewModel, scales: 'x' | 'xy', chartBootstrap: Chart, drawings: DrawingsModel): void;
