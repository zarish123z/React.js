
import React, { useRef } from "react";

function UseRef_FocusInput() {
  const inputRef = useRef(null); // Reference for input element

  //  Focus the input when button is clicked
  const handleFocus = () => {
    inputRef.current.focus();
  };

  // (reset) the input
  const handleReset = () => {
    inputRef.current.value = ""; // for reset
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2> useRef — Focus & Reset Input</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{
          padding: "20px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "1px solid gray",
        }}
      />
      <div style={{ marginTop: "25px" }}>
        <button onClick={handleFocus}
         style={{
            background: "#1976d2",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "6px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Focus Input
        </button>
        <button onClick={handleReset}
        style={{
            background: "#e53935",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >Reset Input</button>
      </div>
    </div>
  );
}

export default UseRef_FocusInput;
