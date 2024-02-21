import React from "react";
import "../styles/profit-lose-view.css";
export default function ProfitLoseView({
  profit,
  lose,
  isShow,
}: {
  profit: string;
  lose: string;
  isShow: boolean;
}) {
  return (
    <>
      {isShow && (
        <div className="profit-lose-view">
          <div className="item">
            <h2>{profit}</h2>
            <p>Expected Profit</p>
          </div>
          <div className="item lose">
            <h2>{lose}</h2>
            <p>Profit AfterSale</p>
          </div>
        </div>
      )}
    </>
  );
}
