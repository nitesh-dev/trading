import "../../styles/widgets/toast.css";

// export default function Toast() {

//   return <div className="toast">

//   </div>;
// }

import React, {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { IconHigher } from "../icons/IconHigher";
import { TradeToastData } from "../../lib/DataType";
import { IconLower } from "../icons/IconLower";
//context
interface ToastContextProps {
  addToast: (data: TradeToastData) => void;
  toasts: TradeToastData[];
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

//create toast view
interface ToastBoxProps {
  toasts: TradeToastData[];
}

interface ToastBoxRef {
  scrollToBottom: () => void;
}

const ToastBox = forwardRef<ToastBoxRef, ToastBoxProps>(({ toasts }, ref) => {
  const toastBoxRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => ({
    scrollToBottom: () => {
      if (toastBoxRef.current) {
        toastBoxRef.current.scrollTop = toastBoxRef.current.scrollHeight;
      }
    },
  }));

  return (
    <div className="toast-box" ref={toastBoxRef}>
      {toasts.map((data, i) => (
        <div className="trade-toast" key={i}>
          <div className="title">{data.title}</div>
          <div className={data.type == "higher" ? "symbol" : "symbol danger"}>
            {data.symbol}{" "}
            {data.type == "higher" ? <IconHigher /> : <IconLower />}
          </div>
          <div className="values">
            <div>
              <span>{data.place == "start" ? "Forecast" : "Payout"}</span>
              <span className="text">{data.value1}</span>
            </div>
            <div>
              <span>
                {data.place == "start"
                  ? "Amount"
                  : data.isProfit
                  ? "Profit"
                  : "Lose"}
              </span>
              <span className="text">{data.value2}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

//provider
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<TradeToastData[]>([]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  const toastBoxRef = useRef<ToastBoxRef | null>(null);
  useEffect(() => {
    return () => {
      clearInterval(timerId);
    };
  }, []);
  useEffect(() => {
    if (toasts.length == 0 && timerRunning) {
      clearInterval(timerId);
      setTimerRunning(false);
    }
  }, [toasts]);

  const removeLastToast = () => {
    setToasts((oldToasts) => oldToasts.slice(1, oldToasts.length));
  };

  const addToast = (data: TradeToastData) => {
    setToasts((prevToasts) => [...prevToasts, data]);
    if (toasts.length == 0 && !timerRunning) {
      setTimerId(() => setInterval(removeLastToast, 4000) as any);
    }
    setTimerRunning(true);
    if (toastBoxRef.current) {
      toastBoxRef.current.scrollToBottom();
    }
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
      <ToastBox toasts={toasts} ref={toastBoxRef} />
    </ToastContext.Provider>
  );
};

export function ToastExample() {
  const { addToast } = useToast();
  function show() {
    addToast({
      type: "lower",
      isProfit: false,
      place: "end",
      symbol: "ABC",
      title: "hi toast",
      value1: "$10",
      value2: "higher",
    });
  }
  return (
    <div>
      <button onClick={show}>show</button>
    </div>
  );
}
