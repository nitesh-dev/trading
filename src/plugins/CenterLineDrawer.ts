import React, { useCallback } from 'react';
import { Drawer } from '@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager';
import { CanvasElement } from '@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container';
import { Chart } from '@dx-private/dxchart5-modules';
import { Candle } from '@devexperts/dxcharts-lite/dist/chart/model/candle.model';
import { primaryColor } from '../lib/Color';
export class CenterLineDrawer implements Drawer {
    constructor(private chart: Chart) {}
    draw() {
        const canvasModel = this.chart.mainCanvasModel;
        const ctx = canvasModel.ctx;
        const chartBounds = this.chart.bounds.getBounds(CanvasElement.CHART);
        // ctx.save();
        // ctx.beginPath();
        // ctx.strokeStyle = 'red';
        // const lineX = chartBounds.x + 300;
        // ctx.moveTo(lineX, chartBounds.y);
        // ctx.lineTo(lineX, chartBounds.y + chartBounds.height);
        // ctx.stroke();
        // ctx.restore();

        const chartModel = this.chart.chartModel;

        const candle = chartModel.mainCandleSeries.getLastDataSeriesPoint();
        const candleSeries = this.chart.chartModel.mainCandleSeries;

        // const candleX = chartModel.toX(candle?. ?? 0);
        // const candleY = chartModel.toY(candle?.idx ?? 0);
        const lastCandleX = candle? candle.x(candleSeries.view) : 0;
        const lastCandleY = candle? candle.y(candleSeries.view) : 0;
        // console.log(candle!.x(candleSeries.view), candle!.y(candleSeries.view))

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = primaryColor;
        ctx.moveTo(lastCandleX, lastCandleY);
        ctx.ellipse(lastCandleX, lastCandleY, 8, 8, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = primaryColor;
        ctx.moveTo(0, lastCandleY);
        ctx.lineTo(chartBounds.width, lastCandleY);
        ctx.stroke();
        ctx.restore();
    }
    getCanvasIds(): Array<string> {
        return [this.chart.mainCanvasModel.canvasId];
    }
}
// export const CustomDrawer = () => {
//     const onChartCreated = useCallback((chart: Chart) => {
//         const lineDrawer = new LineDrawer(chart);
//         chart.drawingManager.addDrawer(lineDrawer, 'drawer');
//     }, []);
//     return <DemoChart onChartCreated={onChartCreated} />;
// };