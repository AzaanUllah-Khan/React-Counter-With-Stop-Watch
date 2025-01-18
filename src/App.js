import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

const style1 = {
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexDirection: "column",
  borderRadius: "5px",
  border: "1px solid #0271ff"
};

const style2 = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "20px"
};

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [timez, setTimez] = useState(0);
  const [timeh, setTimeh] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
  
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimez((prevTimez) => {
          if (prevTimez < 100) {
            return prevTimez + 1;
          } else {
            setTime((prevTime) => prevTime + 1);
            return 0;
          }
        });
      }, 1);
    } else {
      clearInterval(intervalId);
    }
  
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, time]);
  
  useEffect(() => {
    if (time >= 60) {
      setTimeh((prevTimeh) => prevTimeh + 1);
      setTime(0);
    }
  }, [time]);
  
  

  function inc() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  function res() {
    setCount(0);
  }

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setTime(0);
    setTimez(0);
    setTimeh(0);
  }

  return (
    <>
      <h1 style={{ color: "#0271ff", textAlign: "center", borderBottom: "1px solid #cce2ff", fontSize: "20px", paddingBottom: "10px", marginBottom: "20px" }}>Counter</h1>
      <div style={style1}>
        <h1 style={{ textAlign: "center" }}>{count}</h1>
        <div style={style2}>
          <Button variant="outline-danger" onClick={inc}>Increment</Button>
          <Button variant="outline-dark" onClick={dec}>Decrement</Button>
          <Button variant="outline-info" onClick={res}>Reset</Button>
        </div>
      </div>

      <h1 style={{ color: "#0271ff", textAlign: "center", borderBottom: "1px solid #cce2ff", fontSize: "20px", paddingBottom: "10px", margin: "100px 0 20px" }}>Stop Watch</h1>
      <div style={style1}>
        <h1 style={{ textAlign: "center" }}>{timeh}:{time}:{timez}</h1>
        <div style={style2}>
          <Button variant="outline-success" onClick={start}>Start</Button>
          <Button variant="outline-warning" onClick={stop}>Stop</Button>
          <Button variant="outline-dark" onClick={reset}>Reset</Button>
        </div>
      </div>
  <div style={{textAlign: "center", marginTop: "30px", color: "#0271ff"}}>
        <p>Made By <strong>Azaan Ullah Khan</strong> with 💙</p>
    </div>
    </>
  );
}

export default App;
