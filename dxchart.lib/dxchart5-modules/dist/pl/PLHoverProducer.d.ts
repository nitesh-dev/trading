/** Copyright ©2024 Devexperts LLC.
All rights reserved. Any unauthorized use will constitute an infringement of copyright.
In case of any questions regarding types of use, please contact legal@devexperts.com.
This notice must remain intact.
**/
import { ChartBaseElement } from '@devexperts/dxcharts-lite/dist/chart/model/chart-base-element';
import { PLChartModel } from './PLChartModel';
import EventBus from '@devexperts/dxcharts-lite/dist/chart/events/event-bus';
import { CrossEventProducerComponent } from '@devexperts/dxcharts-lite/dist/chart/inputhandlers/cross-event-producer.component';
/**
 * Maps EVENT_CROSS to EVENT_HOVER specific for PL chart.
 * Contains PL lines with id, name and PL value.
 */
export declare class PLHoverProducer extends ChartBaseElement {
    constructor(eventBus: EventBus, plChartModel: PLChartModel, crossProducer: CrossEventProducerComponent);
    private findClosestPl;
}
export interface PLHover {
    x: number;
    y: number;
    xValue: number;
    yValue: number;
    lines: Array<PLHoverLine>;
}
interface PLHoverLine {
    id: unknown;
    name: unknown;
    pl: unknown;
}
export {};
