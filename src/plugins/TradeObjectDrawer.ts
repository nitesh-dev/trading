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
import VisualCandle from "@devexperts/dxcharts-lite/dist/chart/model/visual-candle";
import { TradeObject } from "../lib/DataType";
import { uid } from "uid";
import flagIcon from "../assets/flag.png";
import dropdownDownIcon from "../assets/drop-down-arrow.png";
import dropdownUpIcon from "../assets/drop-up-arrow.png";

import { formatMinutesToTime, formatTimestampToExpiryTime } from "../lib/Utils";
export class TradeObjectDrawer implements Drawer {
  private tradeObjects = Array<TradeObject>();

  constructor(private chart: Chart) {}
  draw() {
    const canvasModel = this.chart.mainCanvasModel;
    const ctx = canvasModel.ctx;

    this.tradeObjects.forEach((element) => {
      this.drawTradeObject(ctx, element);
    });

    // const chartModel = this.chart.chartModel;
    // const candle = chartModel.mainCandleSeries.getLastDataSeriesPoint();
    // const candleSeries = this.chart.chartModel.mainCandleSeries;

    // if (!candle) return;

    // const lastCandleY = candle.y(candleSeries.view);

    // const endCandleTime = 1000 * 10 + candle.candle.timestamp;
    // const endCandle = chartModel.candleFromTimestamp(endCandleTime);
    // const endCandleX = endCandle.x(candleSeries.view);
  }

  private drawTradeObject(
    ctx: CanvasRenderingContext2D,
    tradeObject: TradeObject
  ) {
    console.log(tradeObject);
    const chartModel = this.chart.chartModel;
    const candleSeries = this.chart.chartModel.mainCandleSeries;
    const chartBounds = this.chart.bounds.getBounds(CanvasElement.CHART);

    const startCandle = chartModel.candleFromTimestamp(
      tradeObject.startTimestamp
    );
    const endCandle = chartModel.candleFromTimestamp(tradeObject.endTimestamp);

    const endCandleX = endCandle.x(candleSeries.view);
    const endCandleY = endCandle.y(candleSeries.view);

    const startCandleX = startCandle.x(candleSeries.view);
    const startCandleY = startCandle.y(candleSeries.view);

    ctx.save();
    ctx.beginPath();

    // horizontal line
    if (tradeObject.tradeType == "higher") {
      ctx.strokeStyle = successColor;
    } else {
      ctx.strokeStyle = dangerColor;
    }

    ctx.moveTo(startCandleX, startCandleY);
    ctx.lineTo(endCandleX, startCandleY);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    // circle
    ctx.fillStyle = "white";
    ctx.ellipse(startCandleX, startCandleY, 4, 4, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore;

    ctx.save();
    ctx.beginPath();
    // trade box
    if (tradeObject.tradeType == "higher") {
      ctx.fillStyle = successColor;
    } else {
      ctx.fillStyle = dangerColor;
    }


    // calculate text width
    ctx.font = "20px Arial";
    const priceText = "$" + tradeObject.price
    const priceTextWidth = ctx.measureText(priceText).width;
    
    
    ctx.font = "16px Arial";
    const timeText = formatMinutesToTime(tradeObject.timeInterval)
    const timeTextWidth = ctx.measureText(timeText).width;



    const padding = 5;
    const rectWidth = Math.max(timeTextWidth, priceTextWidth) * 2;
    const rectHeight = 60;
    const rectX = startCandleX - rectWidth - 10; // 10 is offset
    const rectY = startCandleY - Math.round(rectHeight / 2);
    ctx.roundRect(rectX, rectY, rectWidth, rectHeight, 4);
    ctx.fill();

    // arrow img
    const image = new Image();
    image.src = dropdownDownIcon;
    ctx.drawImage(image, rectX + padding, rectY + padding, 24, 24);

    // price text
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(
      priceText,
      rectX + padding + 24,
      rectY + padding + 18
    );

    ctx.font = "16px Arial";

    const timeCenterX = rectX +  Math.round((rectWidth - timeTextWidth) / 2)
    ctx.fillText(
      timeText,
      timeCenterX,
      rectY + padding + 18 + 25
    );

    ctx.restore();

    this.drawTradeArea();
    this.drawExpiryArea(
      ctx,
      endCandleX,
      endCandleY,
      chartBounds.height,
      tradeObject.endTimestamp
    );
  }

  private drawTradeArea() {}

  private drawExpiryArea(
    ctx: CanvasRenderingContext2D,
    endCandleX: number,
    endCandleY: number,
    chartHeight: number,
    endTimestamp: number
  ) {
    ctx.save();
    ctx.beginPath();

    // vertical line
    ctx.strokeStyle = expiryColor;
    ctx.moveTo(endCandleX, endCandleY);
    ctx.lineTo(endCandleX, chartHeight);
    ctx.stroke();

    // flag icon
    const image = new Image();
    image.src = flagIcon;
    ctx.drawImage(image, endCandleX, 24, 24, 16);

    // text
    ctx.font = "16px Arial";
    ctx.fillStyle = expiryColor; // Color of the text

    // Draw text using fillText  12:40:23
    ctx.fillText("Expiration time", endCandleX + 10, 70);
    ctx.fillText(
      formatTimestampToExpiryTime(endTimestamp),
      endCandleX + 10,
      95
    );
    ctx.restore();
  }

  getCanvasIds(): Array<string> {
    return [this.chart.mainCanvasModel.canvasId];
  }

  addTradeObject(
    timeInterval: number,
    tradeType: "higher" | "lower",
    price: number
  ) {
    console.log("add trade object");
    const chartModel = this.chart.chartModel;
    const candle = chartModel.mainCandleSeries.getLastDataSeriesPoint();

    if (!candle) {
      console.log("Unable to add trade");
      return null;
    }

    const endCandleTime = 1000 * timeInterval + candle.candle.timestamp;
    const endCandle = chartModel.candleFromTimestamp(endCandleTime);

    const id = uid();
    const newTrade: TradeObject = {
      id: id,
      startTimestamp: candle.candle.timestamp,
      endTimestamp: endCandle.candle.timestamp,
      price: price,
      timeInterval: timeInterval,
      tradeType: tradeType,
    };

    this.tradeObjects.push(newTrade);
    this.chart.drawingManager.redrawCanvasesImmediate();
  }

  removeAllTradeObjects() {
    this.tradeObjects = Array<TradeObject>();
    this.chart.drawingManager.redrawCanvasesImmediate();
  }
}
