import React, { useCallback } from "react";
import { Drawer } from "@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager";
import { CanvasElement } from "@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container";
import { Chart } from "@dx-private/dxchart5-modules";
import { Candle } from "@devexperts/dxcharts-lite/dist/chart/model/candle.model";
import { dangerHover, dangerHoverLight, primaryColor, successHover, successHoverLight } from "../lib/Color";
import { HoverDirection } from "../lib/DataType";
import redArrow from "../assets/red-arrow.png";
import greenArrow from "../assets/green-arrow.png";
export class CenterHoverDrawer implements Drawer {
  constructor(private chart: Chart) {
    console.log("created")
  }

  private hoverDir = HoverDirection.down;

  draw() {

    console.log("draw", this.hoverDir)
    if (this.hoverDir == HoverDirection.none) return;
    
    const canvasModel = this.chart.mainCanvasModel;
    const ctx = canvasModel.ctx;
    const chartBounds = this.chart.bounds.getBounds(CanvasElement.CHART);

    const chartModel = this.chart.chartModel;
    const candle = chartModel.mainCandleSeries.getLastDataSeriesPoint();
    const candleSeries = this.chart.chartModel.mainCandleSeries;
    const lastCandleX = candle ? candle.x(candleSeries.view) : 0;
    const lastCandleY = candle ? candle.y(candleSeries.view) : 0;

    ctx.save();
    ctx.beginPath();

    // Create a linear gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, chartBounds.height);

    if (this.hoverDir == HoverDirection.up) {
      gradient.addColorStop(0, successHoverLight);
      gradient.addColorStop(1, successHover);
    } else if (this.hoverDir == HoverDirection.down) {
        gradient.addColorStop(0, dangerHover);
        gradient.addColorStop(1, dangerHoverLight);
    }

    ctx.fillStyle = gradient;
    // ctx.moveTo(0, lastCandleY);

    if (this.hoverDir == HoverDirection.up) {
      ctx.fillRect(0, 0, chartBounds.width, lastCandleY);
      const image = new Image()
      image.src = greenArrow
      ctx.drawImage(image, lastCandleX + 10, lastCandleY - 50, 40, 40)
    } else {
      ctx.fillRect(
        0,
        lastCandleY,
        chartBounds.width,
        chartBounds.height - lastCandleY
      );
      const image = new Image()
      image.src = redArrow
      ctx.drawImage(image, lastCandleX + 10, lastCandleY + 10, 40, 40)
    }

    ctx.fill();
    ctx.restore();

  }

  showHover(dir: HoverDirection) {
    this.hoverDir = dir;
    console.log(dir)
    // this.draw()
  }

  getCanvasIds(): Array<string> {
    return [this.chart.mainCanvasModel.canvasId];
  }
}
