import React, { useContext } from "react";
import { UserContext } from "./UseContext";

function AppInsideuseContext() {
  // Step 5: Context se values access karo
  // Ab hume props pass karne ki zaroorat nahi
  const { user, setUser } = useContext(UserContext);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        background: "#f5f5f5",
        padding: "25px",
        borderRadius: "10px",
        width: "350px",
        marginInline: "auto",
      }}
    >
      <h2> useContext </h2>

      {/*  Global Data (user) UI mein dikh rahi hai */}
      <h3>Welcome: {user}</h3>

      {/*  Button click → global state change */}
      <button
        onClick={() => setUser("Guest User")}
        style={{
          marginTop: "15px",
          padding: "8px 15px",
          borderRadius: "8px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Change User
      </button>
    </div>
  );
}

export default AppInsideuseContext
