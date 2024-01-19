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
import { ToastExample } from "./widgets/Toast";
import TimePicker from "./widgets/TimePicker";
import RightPanelTime from "./RightPanelTime";

export function RightPanel() {
  const [currentAmount, setCurrentAmount] = useState(10);
  const tradeDuration = useRef(0);

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
      drawer.addTradeObject(tradeDuration.current, tradeType, currentAmount);
    }
  }

  return (
    <div className="right-panel">
      <RightPanelTime
        onTradeDurationChange={(e) => (tradeDuration.current = e)}
      />

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
        <IconHigher />
        Higher
      </button>

      <button
        onClick={() => addTradeObject("lower")}
        className="low"
        onMouseOver={() => showHover(HoverDirection.down)}
        onMouseOut={() => showHover(HoverDirection.none)}
      >
        <IconLower />
        Lower
      </button>
      {/* <ToastExample/> */}
    </div>
  );
}
