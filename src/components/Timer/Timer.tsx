import React from "react";
import { useState } from "react";

export const Timer = (props: any) => {
  const [isSession, setIsSession] = useState(true);
  const [timerSecond, setTimerSecond] = useState(0);
  const [timerMinute, setTimerMinute] = useState(props.timerMinute);
  return (
    <div>
      <div className="timer-container">
        <h3>{isSession === true ? "Session" : "Break"}</h3>
        <span className="timer">
          {timerMinute} :
          {timerSecond === 0
            ? "00"
            : timerMinute < 10
            ? "0" + timerSecond
            : timerSecond}
        </span>
      </div>
      <div className="timer-actions">
        <button>Play</button>
        <button>Stop</button>
        <button>Refresh</button>
      </div>
    </div>
  );
};
