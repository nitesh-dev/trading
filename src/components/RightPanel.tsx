import React, { useContext, useRef, useState } from "react";
import "../styles/right-panel.css";
import { BoxWidget } from "./widgets/BoxWidget";
import { BoxWidgetData, HoverDirection } from "../lib/DataType";
import { AppContext } from "../App";
import { CenterHoverDrawer } from "../plugins/CenterHoverDrawer";
import { TradeObjectDrawer } from "../plugins/TradeObjectDrawer";
import { IconDollar } from "./icons/IconDollar";
import { IconSubtract } from "./icons/IconSubtract";
import { IconAdd } from "./icons/IconAdd";
import { IconLower } from "./icons/IconLower";
import { IconHigher } from "./icons/IconHigher";
import { ToastExample, useToast } from "./widgets/Toast";

export function RightPanel() {
  const {addToast} = useToast();
  const [currentAmount, setCurrentAmount] = useState(10);
  const timeButtons = useRef<Array<BoxWidgetData>>([
    {
      callback: null,
      icon: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2Zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333 0 4.595 3.738 8.333 8.333 8.333 4.595 0 8.333-3.738 8.333-8.333 0-4.595-3.738-8.333-8.333-8.333ZM11.25 6a.75.75 0 0 1 .743.648L12 6.75V12h3.25a.75.75 0 0 1 .102 1.493l-.102.007h-4a.75.75 0 0 1-.743-.648l-.007-.102v-6a.75.75 0 0 1 .75-.75Z" />
        </svg>
      ),
    },
  ]);

  const amountButtons = useRef<Array<BoxWidgetData>>([
    {
      callback: () => {
        setCurrentAmount((old) => old - 1);
      },
      icon: <IconSubtract />,
    },
    {
      callback: null,
      icon: <IconDollar />,
    },
    {
      callback: () => {
        setCurrentAmount((old) => old + 1);
      },
      icon: <IconAdd />,
    },
  ]);

  const appContext = useContext(AppContext);

  function showHover(direction: HoverDirection) {
    if (appContext.chart) {
      const drawer = appContext.chart.drawingManager.getDrawerByName(
        "center-hover-drawer"
      ) as CenterHoverDrawer;
      drawer.showHover(direction);
    }
  }

  function addTradeObject(tradeType: "higher" | "lower") {
    if (appContext && appContext.chart) {
      const drawer = appContext.chart.drawingManager.getDrawerByName(
        "trade-object-drawer"
      ) as TradeObjectDrawer;
      drawer.addTradeObject(
        Math.round(Math.random() * 200 + 20),
        tradeType,
        currentAmount
      );
    }
  }

  return (
    <div className="right-panel">
      <BoxWidget title="Time" value="00:00:05" buttons={timeButtons.current} />
      <BoxWidget
        title="Amount"
        value={"$" + currentAmount}
        buttons={amountButtons.current}
      />

      <div className="payout">
        <div>
          <p className="title">Payout</p>
          <h3 className="success">+92%</h3>
          <p className="success">$19.20</p>
        </div>
        <div>
          <p>Profit</p>
          <p className="error">+$9.20</p>
        </div>
      </div>

      <button
        onClick={() => addTradeObject("higher")}
        className="high"
        onMouseOver={() => showHover(HoverDirection.up)}
        onMouseOut={() => showHover(HoverDirection.none)}
      >
        <IconHigher/>
        Higher
      </button>

      <button
        onClick={() => addTradeObject("lower")}
        className="low"
        onMouseOver={() => showHover(HoverDirection.down)}
        onMouseOut={() => showHover(HoverDirection.none)}
      >
        <IconLower/>
        Lower
      </button>
      {/* <ToastExample/> */}
    </div>
  );
}
