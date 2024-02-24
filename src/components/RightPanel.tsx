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
import RightPanelTime from "./RightPanelTime";
import ProfitLoseView from "./ProfitLoseView";

export function RightPanel() {
  const { addToast } = useToast();
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
      const obj = drawer.addTradeObject(
        tradeDuration.current,
        tradeType,
        currentAmount
      );

      // TODO: close trade object after 2 seconds
      if (obj) {
        setTimeout(() => {
          drawer.closeTradeObject(obj.id, "$100.6999", false);
          addToast({
            place: "end",
            type: "higher",
            isProfit: false,
            title: "Trade order closed",
            symbol: localStorage.getItem("symbol") || "",
            value1: "$100",
            value2: "$50",
          });

          setTimeout(() => {
            drawer.removeTradeObjectById(obj.id);
          }, 4000);
        }, tradeDuration.current * 1000);
      }

      addToast({
        place: "start",
        type: tradeType,
        isProfit: false,
        title: "Trade order placed",
        symbol: localStorage.getItem("symbol") || "",
        value1: tradeType,
        value2: "$" + currentAmount,
      });
    }
  }

  return (
    <>
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
      </div>
      <ProfitLoseView isShow={true} profit="+$100.80" lose="-$10.50" />
    </>
  );
}
