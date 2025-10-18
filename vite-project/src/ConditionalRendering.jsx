import React, { useState } from "react";

function ConditionalRendering() {
  // State: Tracks whether user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // ⚡ Toggle login state + show alert

  const handleToggle = () => {
    const newState = !isLoggedIn; //(flip true or false)
    setIsLoggedIn(newState); // updates the state
    alert( newState ? "✅Logged in successfully!" : "🚪 Logged out!"); // shows alert
  };

  //   button styles
  const buttonStyle = {
    padding: "20px 24px",
    marginTop: "20px",
    backgroundColor: isLoggedIn ? "#e74c3c" : "#27ae60", // red = logout, green = login
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2> Conditional Rendering (Ternary Operator)</h2>

      {/* If isLoggedIn is true → shows  “Welcome, User!”
      If false → shows  “Please log in.” */}

      <h3>{isLoggedIn ? " Welcome, User!" : " Please log in."}</h3>

      {/*  Toggle Button */}
      <button onClick={handleToggle}
       style={buttonStyle}
       >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default ConditionalRendering;
