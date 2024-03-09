import { Drawer } from "@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager";
import { CanvasElement } from "@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container";
import { Chart } from "@dx-private/dxchart5-modules";
import { expiryColor } from "../lib/Color";

import flagIcon from "../assets/flag.png";

import { formatMinutesToTime, formatTimestampToExpiryTime } from "../lib/Utils";
export class TradeObjectMarkerDrawer implements Drawer {
  private timeIntervalInSec = 10; // in seconds
  private isFixed = false;
  private lastDrawn = 0;
  private catchFixedTime = 0;

  constructor(private chart: Chart) {
    setInterval(() => {
      const now = new Date().getTime();
      const diff = now - this.lastDrawn;
      if (diff > 500) {
        // console.log("redraw");
        this.chart.drawingManager.redrawCanvasesImmediate();
      }
    }, 300);
  }
  draw() {
    this.lastDrawn = new Date().getTime();
    const canvasModel = this.chart.dynamicObjectsCanvasModel;
    const ctx = canvasModel.ctx;

    console.log(this.isFixed ? "fixed" : "not fixed");

    this.calculateInterval();
    if (this.timeIntervalInSec != 0) this.drawMarker(ctx);
  }

  private secondsToHms(seconds: number) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);
    return [h, m, s];
  }

  private calculateInterval() {
    if (this.isFixed) {
      let interval = 0; // in seconds
      const now = new Date();
      const today = new Date(now);
      const [hours, minutes, seconds] = this.secondsToHms(
        this.catchFixedTime
      );
      today.setHours(hours, minutes, seconds, 0); // Set hours, minutes, seconds for today
      console.log({ interval });
      interval = Math.round((today.getTime() - now.getTime()) / 1000);
      this.timeIntervalInSec = interval;
    }
  }

  private drawMarker(ctx: CanvasRenderingContext2D) {
    const chartModel = this.chart.chartModel;
    const candleSeries = this.chart.chartModel.mainCandleSeries;
    const chartBounds = this.chart.bounds.getBounds(CanvasElement.CHART);

    const lastCandle = chartModel.mainCandleSeries.getLastDataSeriesPoint();
    if (!lastCandle) return;

    let endTimestamp =
      lastCandle.candle.timestamp + this.timeIntervalInSec * 1000;
    const endCandle = chartModel.candleFromTimestamp(endTimestamp);

    const endCandleX = endCandle.x(candleSeries.view);
    const endCandleY = endCandle.y(candleSeries.view);

    ctx.save();
    ctx.beginPath();

    // vertical line
    ctx.strokeStyle = expiryColor;
    ctx.moveTo(endCandleX, endCandleY);
    ctx.lineTo(endCandleX, chartBounds.height);
    ctx.stroke();

    // flag icon
    const image = new Image();
    image.src = flagIcon;
    ctx.drawImage(image, endCandleX, 0, 18, 12);

    // text
    ctx.font = "12px Arial";
    ctx.fillStyle = expiryColor; // Color of the text

    // Draw text using fillText  12:40:23
    ctx.fillText("Expiry Time", endCandleX + 10, 50);
    ctx.fillText(
      formatTimestampToExpiryTime(endTimestamp),
      endCandleX + 10,
      70
    );
    ctx.restore();
  }

  getCanvasIds(): Array<string> {
    return [this.chart.dynamicObjectsCanvasModel.canvasId];
  }

  /*
  @Note: param 0 means no expiry line
  */
  setExpiry(intervalInSec: number, isFixed = false) {
    this.isFixed = isFixed;
    if (isFixed) {
      this.catchFixedTime = intervalInSec;
    } else {
      this.timeIntervalInSec = intervalInSec;
    }

    this.chart.drawingManager.redrawCanvasesImmediate();
  }
}
