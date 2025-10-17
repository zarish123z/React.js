import React, { useState } from "react";

function HideShowToggle() {
  const [show, setShow] = useState(true); //  Tracks if text is visible

  // create  button style
  const btnStyles = {
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    color: "white",
     border: " 4mm ridge rgb(200 210 50 / 0.9)",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>👁️ Hide, Show & Toggle </h2>

      {/*  Message appears only when show = true */}
      {show && <p style={{ fontSize: "20px", color: "#7e1818" }}
      >Hello, I am visible!</p>}

      {/*  Buttons */}
      <div style={{ marginTop: "20px" }}>
        
         {/* show button NOTE: (...) to copy all properties from btnStyle into this new style object. */}
        <button onClick={() => setShow(true)} style={{ ...btnStyles, background: "#00b894" }}>
          Show
        </button>

        {/* Hide button */}
        <button onClick={() => setShow(false)} style={{ ...btnStyles, background: "#d63031" }}>
          X_Hide
        </button>

        {/* Toggle button  Note: !boolean(True or flase) */}
        <button onClick={() => setShow(!show)} style={{ ...btnStyles, background: "#5759adff" }}>
          Toggle
        </button>
      </div>
    </div>
  );
}

export default HideShowToggle;
