/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ExtendedContext, ExtendedHitTestContext } from './components/extended_context/ExtendedContext';
import { CanvasModel } from '@devexperts/dxcharts-lite/dist/chart/model/canvas.model';
import EventBus from '@devexperts/dxcharts-lite/dist/chart/events/event-bus';
import { ChartWithDrawings } from './drawings.config';
export default class Canvases {
    dynamicObjectsCanvasModel: CanvasModel;
    hitTestCanvasModel: CanvasModel;
    dynamicObjectsContext: ExtendedContext;
    hitTestContext: ExtendedHitTestContext;
    constructor(eventBus: EventBus, staticCanvas: HTMLCanvasElement, chartBootstrap: ChartWithDrawings);
}
