import React from "react";
import "./Stopwatch.css";
import ExerciseList from "../Components/ExerciseList";
import ItemModal from "../Components/ItemModal";

function Stopwatch() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimeOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div className="Stopwatch">
      <div className="digits" style={{ fontSize: 72 }}>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="font-link3" style={{ fontSize: 36 }}>
        {!timerOn && time === 0 && (
          <button onClick={() => setTimeOn(true)}>START</button>
        )}
        {timerOn && <button onClick={() => setTimeOn(false)}>STOP</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimeOn(true)}>RESUME</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>RESET</button>
        )}
      </div>
    </div>
  );
}

export default Stopwatch;
