import React, { useState } from "react";
function ConditionalRendering() {
  const [LoggedIn, setLoggedIn] = useState(false);

  //  Toggle login state + show alert or IF_Else but inside(handleToggle)

  const handleToggle = () => {
    const newState = !LoggedIn; //(flip true or false)
    setLoggedIn(newState); // updates the state
    alert( newState ? "✅Logged in successfully!" : "🚪 Logged out!"); // shows alert
  };

  //   button styles
  const buttonStyle = {
    padding: "12px 22px",
    marginTop: "15px",
    backgroundColor: LoggedIn ? "#e74c3c" : "#27ae60", // red = logout, green = login
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2> Conditional Rendering</h2>

      {/* If isLoggedIn is true → shows  “Welcome, User!”
      If false → shows  “Please log in.” */}
      {/* Ternary operator */}

      <h3>{LoggedIn ? " Welcome, User!" : " Please log in."}</h3>

        {/*  Logical AND Operator */}
      {LoggedIn && <p style={{ color: "#1b6cbdff" }}> You have admin access.</p>}

      {/*  Toggle Button */}
      <button onClick={handleToggle}
       style={buttonStyle}
       >
        {LoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default ConditionalRendering;

                  // NOte

// const handleToggle = () => {
//   const newState = !isLoggedIn; //(flip true or false means)
//   setIsLoggedIn(newState); // updates the state

//   //  This part is your IF–ELSE statement when we use ternary op same working 
//   if (newState) {
//     alert("✅ Logged in successfully!");
//   } else {
//     alert("🚪 Logged out!");
//   }
// };