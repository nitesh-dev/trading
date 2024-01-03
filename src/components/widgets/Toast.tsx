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
//context
interface ToastContextProps {
  addToast: (message: string) => void;
  toasts: string[];
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
  toasts: string[];
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
  const message = toasts[0];
  return (
    <div className="toast-box" ref={toastBoxRef}>
      {/* {toasts.map((message, i) => (
        <div className="toast" key={i}>
          {message}
        </div>
      ))} */}
      <div className="toast">{message}</div>
    </div>
  );
});

//provider
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<string[]>([]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerId, setTimerId] = useState<number | undefined>(undefined);
  const toastBoxRef = useRef<ToastBoxRef | null>(null);

  const [activeToast, setActiveToast] = useState<string | null>(null);
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
    setToasts((oldToasts) => {
      const del = oldToasts[0];
      const newToasts = oldToasts.slice(1, oldToasts.length);
      console.log("deleted", del, newToasts);
      return newToasts;
    });
  };

  const addToast = (message: string) => {
    setToasts((prevToasts) => [...prevToasts, message]);
    if (toasts.length == 0 && !timerRunning) {
      setTimerId(() => setInterval(removeLastToast, 5000));
    }
    setTimerRunning(true);
    if (toastBoxRef.current) {
      //   toastBoxRef.current.scrollToBottom();
    }
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
      {activeToast && <ToastBox toasts={toasts} ref={toastBoxRef} />}
    </ToastContext.Provider>
  );
}

export function ToastExample() {
  const { addToast } = useToast();
  function show() {
    addToast("hello " + Math.random());
  }
  return (
    <div>
      <button onClick={show}>show</button>
    </div>
  );
}
