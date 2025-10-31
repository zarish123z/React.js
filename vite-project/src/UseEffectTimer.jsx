
import React, { useState, useEffect } from "react";

function UseEffectTimer() {
  const [seconds, setSeconds] = useState(0);
  const [Running, setRunning] = useState(false); // Timer ON/OFF control

  useEffect(() => {
    let timer;

    if (Running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    //  Cleanup
    return () => clearInterval(timer);
  }, [Running]); //  Run only when state changes

  //  Reset Timer
  const resetTimer = () => {
    setSeconds(0);
    setRunning(false);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "70px",
        background: "#f0f8ff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 0 10px gray",
      }}
    >
      <h2>⏱️Timer.!.!.</h2>
      <h1 style={{ fontSize: "45px", marginBottom: "25px" }}>{seconds}s</h1>

      {/* ▶ Start */}
      <button
        onClick={() => setRunning(true)}
        style={{
          padding: "8px 15px",
          borderRadius: "6px",
          background: "#009688",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        ▶ Start
      </button>

      {/* ⏸ Pause */}
      <button
        onClick={() => setRunning(false)}
        style={{
          marginLeft: 10,
          padding: "8px 15px",
          borderRadius: "6px",
          background: "#e65100",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        ⏸ Pause
      </button>

      {/*  Reset */}
      <button
        onClick={resetTimer}
        style={{
          marginLeft: 10,
          padding: "8px 15px",
          borderRadius: "6px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
         Reset
      </button>
    </div>
  );
}

export default UseEffectTimer;
