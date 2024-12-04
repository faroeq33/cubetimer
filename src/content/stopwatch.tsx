"use client";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (running) {
      interval.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [running]);

  const toggleTime = () => setRunning(!running);

  const handleKey = () => {
    console.log("works");
    toggleTime();
  };

  const getStartorStop = () => {
    if (running) {
      return "Stop";
    }
    return "Start";
  };

  const changeIfActive = `${running ? "text-blue-300" : "text-white"}`;

  return (
    <div className="stopwatch text-white text-center">
      <div className={`numbers capitalize ${changeIfActive}`}>
        {/* <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span> */}
        <NumberDisplay className={`text-9xl`}>
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        </NumberDisplay>
        <NumberDisplay>{("0" + ((time / 10) % 100)).slice(-2)}</NumberDisplay>
      </div>
      <div className="buttons p-4">
        <button
          className={`text-white capitalize m-4  ${running} : 'text-blue-300' `}
          onClick={handleKey}
        >
          {getStartorStop()}
        </button>
        {/* <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button> */}
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

const NumberDisplay = ({ children }: HTMLAttributes<HTMLSpanElement>) => {
  return <span className="text-9xl">{children}</span>;
};
export default Stopwatch;
