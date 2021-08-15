import { useState } from "react";
import "./App.css";
import { BreakInterval } from "./components/BreakInterval/BreakInterval";
import { SessionLength } from "./components/SessionLength/SessionLength";
import { Timer } from "./components/Timer/Timer";
const App = () => {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [timerMinute, setTimerMinute] = useState(25);
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="interval-length-container">
        <BreakInterval
          breakInterval={breakTime}
        ></BreakInterval>
        <SessionLength
          sessionLength={sessionTime}
        ></SessionLength>
      </div>
      <Timer timerMinute={timerMinute}></Timer>
    </div>
  );
};

export default App;
