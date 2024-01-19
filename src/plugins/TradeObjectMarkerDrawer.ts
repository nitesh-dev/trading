import { Drawer } from "@devexperts/dxcharts-lite/dist/chart/drawers/drawing-manager";
import { CanvasElement } from "@devexperts/dxcharts-lite/dist/chart/canvas/canvas-bounds-container";
import { Chart } from "@dx-private/dxchart5-modules";
import { Candle } from "@devexperts/dxcharts-lite/dist/chart/model/candle.model";
import {
  dangerColor,
  expiryColor,
  primaryColor,
  successColor,
} from "../lib/Color";
import { TradeObject } from "../lib/DataType";
import { uid } from "uid";
import flagIcon from "../assets/flag.png";
import dropdownDownIcon from "../assets/drop-down-arrow.png";
import dropdownUpIcon from "../assets/drop-up-arrow.png";

import { formatMinutesToTime, formatTimestampToExpiryTime } from "../lib/Utils";
import VisualCandle from "@devexperts/dxcharts-lite/dist/chart/model/visual-candle";
export class TradeObjectMarkerDrawer implements Drawer {
  private timeIntervalInSec = 10; // in seconds
  private isFixed = false;
  private lastDrawn = 0

  constructor(private chart: Chart) {
    setInterval(() => {
      const now = new Date().getTime()
      const diff = now - this.lastDrawn
      if(diff > 500){
        console.log("redraw")
        this.chart.drawingManager.redrawCanvasesImmediate();
      }
    }, 300)
  }
  draw() {
    this.lastDrawn = new Date().getTime()
    const canvasModel = this.chart.dynamicObjectsCanvasModel;
    const ctx = canvasModel.ctx;

    if (this.timeIntervalInSec != 0) this.drawMarker(ctx);

    // const chartModel = this.chart.chartModel;
    // const candle = chartModel.mainCandleSeries.getLastDataSeriesPoint();
    // const candleSeries = this.chart.chartModel.mainCandleSeries;

    // if (!candle) return;

    // const lastCandleY = candle.y(candleSeries.view);

    // const endCandleTime = 1000 * 10 + candle.candle.timestamp;
    // const endCandle = chartModel.candleFromTimestamp(endCandleTime);
    // const endCandleX = endCandle.x(candleSeries.view);
  }

  private drawMarker(ctx: CanvasRenderingContext2D) {
    const chartModel = this.chart.chartModel;
    const candleSeries = this.chart.chartModel.mainCandleSeries;
    const chartBounds = this.chart.bounds.getBounds(CanvasElement.CHART);

    let endTimestamp = this.timeIntervalInSec * 1000;
    if (!this.isFixed)
      endTimestamp = new Date().getTime() + 1000 * this.timeIntervalInSec;

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

  // private drawTradeObjectMarker(
  //   ctx: CanvasRenderingContext2D,
  //   tradeObject: TradeObject
  // ) {
  //   const chartModel = this.chart.chartModel;
  //   const candleSeries = this.chart.chartModel.mainCandleSeries;
  //   const chartBounds = this.chart.bounds.getBounds(CanvasElement.CHART);

  //   // const startCandle = chartModel.candleFromTimestamp(
  //   //   tradeObject.startTimestamp
  //   // );
  //   const startCandle = tradeObject.candle;
  //   const endCandle = chartModel.candleFromTimestamp(tradeObject.endTimestamp);

  //   const endCandleX = endCandle.x(candleSeries.view);
  //   const endCandleY = endCandle.y(candleSeries.view);

  //   const startCandleX = startCandle.x(candleSeries.view);
  //   const startCandleY = startCandle.y(candleSeries.view);

  //   this.drawTradeArea(ctx, tradeObject, startCandleX, startCandleY, endCandleX);
  //   this.drawExpiryArea(
  //     ctx,
  //     endCandleX,
  //     endCandleY,
  //     chartBounds.height,
  //     tradeObject.endTimestamp
  //   );
  // }

  // private drawTradeArea(ctx: CanvasRenderingContext2D, tradeObject: TradeObject, startCandleX: number, startCandleY: number, endCandleX: number) {
  //   ctx.save();
  //   ctx.beginPath();

  //   // horizontal line
  //   if (tradeObject.tradeType == "higher") {
  //     ctx.strokeStyle = successColor;
  //   } else {
  //     ctx.strokeStyle = dangerColor;
  //   }

  //   ctx.moveTo(startCandleX, startCandleY);
  //   ctx.lineTo(endCandleX, startCandleY);
  //   ctx.stroke();
  //   ctx.restore();

  //   ctx.save();
  //   ctx.beginPath();
  //   // circle
  //   ctx.fillStyle = "white";
  //   ctx.ellipse(startCandleX, startCandleY, 4, 4, 0, 0, 2 * Math.PI);
  //   ctx.fill();
  //   ctx.restore;

  //   ctx.save();
  //   ctx.beginPath();
  //   // trade box
  //   if (tradeObject.tradeType == "higher") {
  //     ctx.fillStyle = successColor;
  //   } else {
  //     ctx.fillStyle = dangerColor;
  //   }

  //   // calculate text width
  //   ctx.font = "20px Arial";
  //   const priceText = "$" + tradeObject.price
  //   const priceTextWidth = ctx.measureText(priceText).width;

  //   ctx.font = "16px Arial";
  //   const timeText = formatMinutesToTime(tradeObject.timeInterval)
  //   const timeTextWidth = ctx.measureText(timeText).width;

  //   const padding = 5;
  //   const rectWidth = Math.max(timeTextWidth, priceTextWidth) * 2;
  //   const rectHeight = 60;
  //   const rectX = startCandleX - rectWidth - 10; // 10 is offset
  //   const rectY = startCandleY - Math.round(rectHeight / 2);
  //   ctx.roundRect(rectX, rectY, rectWidth, rectHeight, 4);
  //   ctx.fill();

  //   // arrow img
  //   const image = new Image();
  //   image.src = dropdownDownIcon;
  //   if(tradeObject.tradeType == "higher")  image.src = dropdownUpIcon;
  //   ctx.drawImage(image, rectX + padding, rectY + padding, 24, 24);

  //   // price text
  //   ctx.font = "20px Arial";
  //   ctx.fillStyle = "white";
  //   ctx.fillText(
  //     priceText,
  //     rectX + padding + 24,
  //     rectY + padding + 18
  //   );

  //   ctx.font = "16px Arial";

  //   const timeCenterX = rectX +  Math.round((rectWidth - timeTextWidth) / 2)
  //   ctx.fillText(
  //     timeText,
  //     timeCenterX,
  //     rectY + padding + 18 + 25
  //   );

  //   ctx.restore();

  // }

  getCanvasIds(): Array<string> {
    return [this.chart.dynamicObjectsCanvasModel.canvasId];
  }

  /*
  @Note: param 0 means no expiry line
  */
  setExpiry(intervalInSec: number, isFixed = false) {
    this.isFixed = isFixed
    this.timeIntervalInSec = intervalInSec;
    this.chart.drawingManager.redrawCanvasesImmediate();
  }

  // addTradeObject(
  //   timeInterval: number,
  //   tradeType: "higher" | "lower",
  //   price: number
  // ) {
  //   console.log("add trade object");
  //   const chartModel = this.chart.chartModel;
  //   const candle = chartModel.mainCandleSeries.getLastDataSeriesPoint();

  //   if (!candle) {
  //     console.log("Unable to add trade");
  //     return null;
  //   }

  //   const endCandleTime = 1000 * timeInterval + candle.candle.timestamp;
  //   const endCandle = chartModel.candleFromTimestamp(endCandleTime);

  //   const id = uid();
  //   const newTrade: TradeObject = {
  //     id: id,
  //     startTimestamp: candle.candle.timestamp,
  //     endTimestamp: endCandle.candle.timestamp,
  //     price: price,
  //     timeInterval: timeInterval,
  //     tradeType: tradeType,
  //     candle: candle
  //   };

  //   this.tradeObjects.push(newTrade);
  //   this.chart.drawingManager.redrawCanvasesImmediate();

  //   return structuredClone(newTrade);
  // }

  // removeTradeObjectById(id: string){
  //   this.tradeObjects = this.tradeObjects.filter((tradeObject) => {
  //     return tradeObject.id != id;
  //   });
  //   this.chart.drawingManager.redrawCanvasesImmediate();
  // }

  // removeAllTradeObjects() {
  //   this.tradeObjects = Array<TradeObject>();
  //   this.chart.drawingManager.redrawCanvasesImmediate();
  // }
}
