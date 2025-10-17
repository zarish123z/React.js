import React, { useState } from "react";

function OnMouse_FC() {
  //  useState  to store and update message text
  const [message, setMessage] = useState("");

  //   when mouse enters the box
  const handleMouseEnter = () => setMessage(" Mouse is inside the box!");

  //  when mouse leaves the box
  const handleMouseLeave = () => setMessage(" Mouse left the box!");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🖱️ onMouse Event </h2>

      {/* Show the current message */}
      <p
           style={{
          fontSize: "20px",
          color: "#7c7e18ff",
          fontWeight: "bold",
           
        }}
          >{message}</p>

      {/*  Hoverable Box */}
      <div
        onMouseEnter={handleMouseEnter} // when mouse enters
        onMouseLeave={handleMouseLeave} // when mouse leaves
        style={{
          margin: "auto",
          width: "250px",
          height: "120px",
          backgroundColor: "#7e1818",
          color: "white",
          lineHeight: "120px",
          borderRadius: "12px",
          cursor: "pointer",
        
        }}
      >
        Hover Me 😎
      </div>
    </div>
  );
}

export default OnMouse_FC;
