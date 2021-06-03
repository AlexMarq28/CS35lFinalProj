import React from "react";
import "./Stopwatch.css";
import ExerciseList from "../Components/ExerciseList";
import ItemModal from "../Components/ItemModal";
import { Row } from "reactstrap";

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
      <div className="digits" style={{ marginBottom: 20, fontSize: 136 }}>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="font-link3" style={{ fontSize: 48 }}>
        {!timerOn && time === 0 && (
            <button 
                style={{ width: 300, color: "#fffff0" ,background: "#228b22", borderRadius: 5, border: "none" }} 
                onClick={() => setTimeOn(true)}>
                    START
            </button>
        )}
        {timerOn && 
        <button 
        style={{ width: 300, color: "#fffff0" ,background: "#8b0000", borderRadius: 5, border: "none" }} 
        onClick={() => setTimeOn(false)}>STOP</button>}
        <div style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20 }}>
        {!timerOn && time > 0 && (
          <button onClick={() => setTimeOn(true)}
          style={{ width: 300, color: "#fffff0" ,background: "#505050", borderRadius: 5, border: "none" }} 
          >RESUME</button>
        )}
        </div>
        <div style={{paddingLeft: 10, paddingRight: 10, marginBottom: 20 }}>
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}
          style={{ width: 300, color: "#fffff0" ,background: "#505050", borderRadius: 5, border: "none" }} 
          >RESET</button>
        )}
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
