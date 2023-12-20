import React, { useState } from "react";
import { getFlagImg } from "../../lib/Utils";

export function AssetsToolBar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="assets-bar">
      <div className="tabs">
        <button
          onClick={() => setActiveTab(0)}
          className={activeTab == 0 ? "active" : ""}
        >
          Currencies
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={activeTab == 1 ? "active" : ""}
        >
          Crypto currencies
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={activeTab == 2 ? "active" : ""}
        >
          Commodities
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={activeTab == 3 ? "active" : ""}
        >
          Stocks
        </button>
        <button
          onClick={() => setActiveTab(4)}
          className={activeTab == 4 ? "active" : ""}
        >
          Indices
        </button>
        <button
          onClick={() => setActiveTab(5)}
          className={activeTab == 5 ? "active" : ""}
        >
          Favorites
        </button>
        <button
          onClick={() => setActiveTab(6)}
          className={activeTab == 6 ? "active" : ""}
        >
          Schedule
        </button>

        <p>
          OTC quotes are provided directly by international banks, liquidity
          providers and market makers without the supervision of an exchange.
        </p>
      </div>

      {/* 0 */}
      {activeTab == 0 && (
        <div className="tab-content">
          <form className="search-bar">
            <input type="text" placeholder="search" />
            <button type="submit">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2.75a7.25 7.25 0 0 1 5.63 11.819l4.9 4.9a.75.75 0 0 1-.976 1.134l-.084-.073-4.901-4.9A7.25 7.25 0 1 1 10 2.75Zm0 1.5a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5Z" />
              </svg>
            </button>
          </form>
          <div className="list">
            <div className="list-header">
              <span>Asset</span>
              <button>
                Payout
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.102 8c-1.074 0-1.648 1.265-.94 2.073l5.521 6.31a1.75 1.75 0 0 0 2.634 0l5.522-6.31c.707-.808.133-2.073-.94-2.073H6.101Z" />
                </svg>
              </button>
            </div>
            <div className="content">
              {[0, 1, 2, 3, 4, 5].map((item, index) => (
                <div key={index} className="item">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Zm1.21.936L9.74 8.615a1.35 1.35 0 0 1-1.016.738l-5.05.734 3.654 3.562c.318.31.463.757.388 1.195l-.862 5.03 4.516-2.375a1.35 1.35 0 0 1 1.257 0l4.516 2.374-.862-5.029a1.35 1.35 0 0 1 .388-1.195l3.654-3.562-5.05-.734a1.35 1.35 0 0 1-1.016-.738l-2.259-4.576Z" />
                  </svg>
                  <div className="logo">
                    <img src={getFlagImg("aus")!} />
                    <img src={getFlagImg("can")!} />
                  </div>
                  <span>aud/cad otc</span>
                  <span>92%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 1 */}
      {activeTab == 1 && <div className="tab-content"></div>}

      {/* 2 */}
      {activeTab == 2 && <div className="tab-content"></div>}
    </div>
  );
}
