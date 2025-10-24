import { useState, useEffect } from "react";

function UseEffectTitle() {
   //Create a state variable
  const [count, setCount] = useState(0);

  //useEffect runs after component renders
  useEffect(() => {
    console.log("useEffect ran!");
    document.title = `You clicked ${count} times`;
  }, [count]); // Runs when 'count' changes

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 10px gray",
      }}>
      <h2>useEffect Example</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}
        style={{
          background: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        >Click Me
        </button>
    </div>
  );
}

export default UseEffectTitle;
