import { useEffect, useState } from "react";
import "../../styles/widgets/time-picker.css";
import { IconSubtract } from "../icons/IconSubtract";
import { IconAdd } from "../icons/IconAdd";

export default function TimePicker({
  defaultValue,
  onValueChange,
}: {
  defaultValue: Array<number>;
  onValueChange: (value: Array<number>) => void;
}) {
  const [hours, setHours] = useState(defaultValue[0]);
  const [minutes, setMinutes] = useState(defaultValue[1]);
  const [seconds, setSeconds] = useState(defaultValue[2]);

  function incrDecrHour(value: number) {
    let newHour = hours + value;
    if (newHour > 23) {
      newHour = 0;
    } else if (newHour < 0) {
      newHour = 23;
    }
    setHours(newHour);
  }

  useEffect(() => {
    onValueChange([hours, minutes, seconds]);
  }, [hours, minutes, seconds]);

  function incrDecrMinuteOrSecond(value: number, symbol: "m" | "s") {
    let newValue = 0;
    if (symbol == "m") {
      newValue = minutes + value;
    } else {
      newValue = seconds + value;
    }

    if (newValue > 59) {
      newValue = 0;
    } else if (newValue < 0) {
      newValue = 59;
    }

    if (symbol == "m") {
      setMinutes(newValue);
    } else {
      setSeconds(newValue);
    }
  }

  function padNumber(value: number) {
    return String(value).padStart(2, "0");
  }

  return (
    <div className="time-picker">
      <div className="time-bar">
        <div className="top icon" onClick={() => incrDecrHour(-1)}>
          <IconSubtract />
        </div>
        <div className="center">
          <input
            max={23}
            min={0}
            maxLength={2}
            type="number"
            value={padNumber(hours)}
            readOnly
          />
        </div>
        <div className="bottom icon" onClick={() => incrDecrHour(1)}>
          <IconAdd />
        </div>
      </div>
      <div className="time-bar">
        <div
          className="top icon"
          onClick={() => incrDecrMinuteOrSecond(-1, "m")}
        >
          <IconSubtract />
        </div>
        <div className="center">
          <input max={59} min={0} type="number" value={padNumber(minutes)} readOnly />
        </div>
        <div
          className="bottom icon"
          onClick={() => incrDecrMinuteOrSecond(1, "m")}
        >
          <IconAdd />
        </div>
      </div>
      <div className="time-bar">
        <div
          className="top icon"
          onClick={() => incrDecrMinuteOrSecond(-1, "s")}
        >
          <IconSubtract />
        </div>
        <div className="center">
          <input max={59} min={0} type="number" value={padNumber(seconds)} readOnly />
        </div>
        <div
          className="bottom icon"
          onClick={() => incrDecrMinuteOrSecond(1, "s")}
        >
          <IconAdd />
        </div>
      </div>
    </div>
  );
}
