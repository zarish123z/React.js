
import React, { useState, useEffect } from "react";

function UseEffectTimer() {
  //  create State for seconds
  const [seconds, setSeconds] = useState(0);

  //  useEffect to start timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1); //  Har 1000miliseconds(1_sec) badhata jaaye
    }, 1000);        

    //  Cleanup (jab component band ho)
    return () => clearInterval(timer);
  }, []);  // Empty [] → sirf ek bar run hoga
        // UI Styling
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        background: "#e3f2fd",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 10px gray",
      }}
    >
      <h2>⏱️ Timer..... </h2>
      <h3>Seconds passed: {seconds}</h3>
    </div>
  );
}

export default UseEffectTimer;
