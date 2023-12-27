import React, { useContext, useRef, useState } from "react";
import "../styles/right-panel.css";
import { BoxWidget } from "./widgets/BoxWidget";
import { BoxWidgetData, HoverDirection } from "../lib/DataType";
import { AppContext } from "../App";

export function RightPanel() {
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
      icon: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.997 13H20a1 1 0 1 0 0-2H3.997a1 1 0 1 0 0 2Z" />
        </svg>
      ),
    },
    {
      callback: null,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.23 122.88">
          <path d="M23.71,111.63a32.57,32.57,0,0,1-3.49-.43l-6.12-.88-3.78-.63c-1.22-.22-2.45-.46-3.66-.73s-2.47-.58-3.53-.86l-1.44-.39V84.06l6.69.55,4.91.29,5.15.23,5.22.16,5.07.1,4.72,0c1.43,0,2.68,0,3.76-.14a22.78,22.78,0,0,0,3-.45,9.46,9.46,0,0,0,2.09-.71,4.65,4.65,0,0,0,1.26-.86,2.7,2.7,0,0,0,.63-1,4.47,4.47,0,0,0,.24-1.55V79.15a3.09,3.09,0,0,0-1.2-2.72,5.5,5.5,0,0,0-1.63-.8,7,7,0,0,0-2-.27h-6.9a49.84,49.84,0,0,1-13.82-1.75A27.5,27.5,0,0,1,8.5,68.25a22,22,0,0,1-6.43-9.72A42.4,42.4,0,0,1,0,44.51V40.22A35.58,35.58,0,0,1,2.29,27a23.85,23.85,0,0,1,7-9.67,32.26,32.26,0,0,1,6.92-4.57,28.29,28.29,0,0,1,7.49-2.25V0H45.52V10.07a91.3,91.3,0,0,1,9.93,1.43l1.84.32c1.53.27,3.05.56,4.56.88s2.78.59,4.08.9l1.48.36V37.64l-2.1-.18c-2.08-.18-4.19-.34-6.31-.47-2.31-.15-4.67-.27-7.08-.38s-4.9-.19-7.09-.24c-2,0-4.17-.07-6.44-.07-1.19,0-2.29,0-3.29.12a26.91,26.91,0,0,0-2.88.36,8.23,8.23,0,0,0-2,.63,4.82,4.82,0,0,0-1.34.92,3,3,0,0,0-.71,1.18,6.19,6.19,0,0,0-.29,2v1.3a5.49,5.49,0,0,0,.36,2.12,3.47,3.47,0,0,0,1,1.33,4.92,4.92,0,0,0,1.91.9,13.07,13.07,0,0,0,3.25.35H43a39.54,39.54,0,0,1,8.77.92,26.84,26.84,0,0,1,7.35,2.79A24.48,24.48,0,0,1,69,61.4a28.62,28.62,0,0,1,2.46,6.79,34.51,34.51,0,0,1,.82,7.57v4.3A51.37,51.37,0,0,1,71.1,91.38,26.08,26.08,0,0,1,67.61,100a22.65,22.65,0,0,1-5.7,6,24.53,24.53,0,0,1-7.62,3.63l-.73.2a43,43,0,0,1-8,1.74v11.35H23.71V111.63Z" />
        </svg>
      ),
    },
    {
      callback: () => {
        setCurrentAmount((old) => old + 1);
      },
      icon: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.883 3.007 12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z" />
        </svg>
      ),
    },
  ]);

  const appContext = useContext(AppContext);


  function showHover(direction: HoverDirection) {
    
      if(appContext && appContext.centerHoverDrawer.current){
        appContext.centerHoverDrawer.current.showHover(direction)
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

      <button className="high" onMouseOver={() => showHover(HoverDirection.up)} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
        </svg>
        Higher
      </button>

      <button className="low" onMouseOver={() => showHover(HoverDirection.down)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352H384z" />
        </svg>
        Lower
      </button>
    </div>
  );
}
