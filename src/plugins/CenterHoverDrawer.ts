import React, { useCallback } from "react";
import { Drawer } from "@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager";
import { CanvasElement } from "@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container";
import { Chart } from "@dx-private/dxchart5-modules";
import { Candle } from "@devexperts/dxcharts-lite/dist/chart/model/candle.model";
import {
  dangerHover,
  dangerHoverLight,
  primaryColor,
  successHover,
  successHoverLight,
  dangerColor,
  successColor,
} from "../lib/Color";
import { HoverDirection } from "../lib/DataType";
import redArrow from "../assets/red-arrow.png";
import greenArrow from "../assets/green-arrow.png";
export class CenterHoverDrawer implements Drawer {
  constructor(private chart: Chart) {
    console.log("created");
  }

  private hoverDir = HoverDirection.none;

  draw() {
    // if (this.hoverDir == HoverDirection.none) return;

    const canvasModel = this.chart.dynamicObjectsCanvasModel;
    const ctx = canvasModel.ctx;
    const chartBounds = this.chart.bounds.getBounds(CanvasElement.CHART);

    const chartModel = this.chart.chartModel;
    const candle = chartModel.mainCandleSeries.getLastDataSeriesPoint();
    const candle2 = chartModel.mainCandleSeries.getSeriesInViewport();
    const candleSeries = this.chart.chartModel.mainCandleSeries;
    const lastCandleX = candle ? candle.x(candleSeries.view) : 0;
    const lastCandleY = candle ? candle.y(candleSeries.view) : 0;

    // draw line and circle
    ctx.save();
    ctx.fillStyle = primaryColor;
    if (this.hoverDir == HoverDirection.down) {
      ctx.fillStyle = dangerColor;
    } else if (this.hoverDir == HoverDirection.up) {
      ctx.fillStyle = successColor;
    }

    ctx.beginPath();
    ctx.moveTo(lastCandleX, lastCandleY);
    ctx.ellipse(lastCandleX, lastCandleY, 8, 8, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = primaryColor;
    if (this.hoverDir == HoverDirection.down) {
      ctx.strokeStyle = dangerColor;
    }else if (this.hoverDir == HoverDirection.up) {
      ctx.strokeStyle = successColor;
    }
    ctx.beginPath();
    ctx.moveTo(0, lastCandleY);
    ctx.lineTo(chartBounds.width, lastCandleY);
    ctx.stroke();
    ctx.restore();

    // gradient
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

    if (this.hoverDir == HoverDirection.up) {
      ctx.fillRect(0, 0, chartBounds.width, lastCandleY);
      const image = new Image();
      image.src = greenArrow;
      ctx.drawImage(image, lastCandleX + 10, lastCandleY - 50, 40, 40);
    } else if (this.hoverDir == HoverDirection.down) {
      ctx.fillRect(
        0,
        lastCandleY,
        chartBounds.width,
        chartBounds.height - lastCandleY
      );
      const image = new Image();
      image.src = redArrow;
      ctx.drawImage(image, lastCandleX + 10, lastCandleY + 10, 40, 40);
    }

    ctx.fill();
    ctx.restore();
  }

  showHover(dir: HoverDirection) {
    this.hoverDir = dir;
    this.chart.drawingManager.redrawCanvasesImmediate();
  }

  getCanvasIds(): Array<string> {
    return [this.chart.dynamicObjectsCanvasModel.canvasId];
  }
}
