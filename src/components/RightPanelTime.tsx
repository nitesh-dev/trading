import { useContext, useEffect, useRef, useState } from "react";
import { BoxWidget } from "./widgets/BoxWidget";
import TimePicker from "./widgets/TimePicker";
import { BoxWidgetData } from "../lib/DataType";
import { AppContext } from "../App";
import { TradeObjectMarkerDrawer } from "../plugins/TradeObjectMarkerDrawer";

export default function RightPanelTime({
  onTradeDurationChange,
}: {
  onTradeDurationChange: (duration: number) => void;
}) {
  const appContext = useContext(AppContext);

  const [isIntervalMode, setIsIntervalMode] = useState(true);
  const [intervalTime, setIntervalTime] = useState([0, 1, 0]);
  const [fixedTime, setFixedTime] = useState([0, 0, 0]);
  const timeIntervalButtons = useRef<Array<BoxWidgetData>>([
    {
      callback: onToggle,
      icon: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2Zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333 0 4.595 3.738 8.333 8.333 8.333 4.595 0 8.333-3.738 8.333-8.333 0-4.595-3.738-8.333-8.333-8.333ZM11.25 6a.75.75 0 0 1 .743.648L12 6.75V12h3.25a.75.75 0 0 1 .102 1.493l-.102.007h-4a.75.75 0 0 1-.743-.648l-.007-.102v-6a.75.75 0 0 1 .75-.75Z" />
        </svg>
      ),
    },
  ]);

  const timeFixedButtons = useRef<Array<BoxWidgetData>>([
    {
      callback: onToggle,
      icon: (
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3.747a.75.75 0 0 1 .75-.75h16.504a.75.75 0 0 1 .6 1.2L16.69 9.748l4.164 5.552a.75.75 0 0 1-.6 1.2H4.5v4.749a.75.75 0 0 1-.648.743L3.75 22a.75.75 0 0 1-.743-.648L3 21.249V3.747Zm15.754.75H4.5V15h14.254l-3.602-4.802a.75.75 0 0 1 0-.9l3.602-4.8Z" />
        </svg>
      ),
    },
  ]);

  /*
  <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3.747a.75.75 0 0 1 .75-.75h16.504a.75.75 0 0 1 .6 1.2L16.69 9.748l4.164 5.552a.75.75 0 0 1-.6 1.2H4.5v4.749a.75.75 0 0 1-.648.743L3.75 22a.75.75 0 0 1-.743-.648L3 21.249V3.747Zm15.754.75H4.5V15h14.254l-3.602-4.802a.75.75 0 0 1 0-.9l3.602-4.8Z" /></svg>
  */

  function onToggle() {
    setIsIntervalMode((old) => !old);
  }

  function getTimeInStringFormat(time: Array<number>) {
    const h = String(time[0]).padStart(2, "0");
    const m = String(time[1]).padStart(2, "0");
    const s = String(time[2]).padStart(2, "0");

    return `${h} : ${m} : ${s}`;
  }

  function getCurrentTimeInArray() {
    const time = new Date();
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();
    return [h, m, s];
  }

  function arrayTimeToSeconds(value: Array<number>) {
    return value[0] * 60 * 60 + value[1] * 60 + value[2];
  }

  useEffect(() => {
    if (appContext.chart) {
      const drawer = appContext.chart.drawingManager.getDrawerByName(
        "trade-object-marker-drawer"
      ) as TradeObjectMarkerDrawer;
      drawer.setExpiry(arrayTimeToSeconds(intervalTime));
    }

    onTradeDurationChange(arrayTimeToSeconds(intervalTime))
  }, [intervalTime]);

  useEffect(() => {
    if (appContext.chart) {
      const drawer = appContext.chart.drawingManager.getDrawerByName(
        "trade-object-marker-drawer"
      ) as TradeObjectMarkerDrawer;
      drawer.setExpiry(arrayTimeToSeconds(fixedTime), true);
    }
  }, [fixedTime]);
  return (
    <>
      {isIntervalMode && (
        <>
          <BoxWidget
            title="Time"
            value={getTimeInStringFormat(intervalTime)}
            buttons={timeIntervalButtons.current}
          />
          <TimePicker
            defaultValue={intervalTime}
            onValueChange={(e) => setIntervalTime(e)}
          />
        </>
      )}
      {!isIntervalMode && (
        <>
          <BoxWidget
            title="Time"
            value={getTimeInStringFormat(fixedTime)}
            buttons={timeFixedButtons.current}
          />
          <TimePicker
            defaultValue={getCurrentTimeInArray()}
            onValueChange={(e) => setFixedTime(e)}
          />
        </>
      )}
    </>
  );
}
