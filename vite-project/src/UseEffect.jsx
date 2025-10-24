import { useState,useEffect } from "react";
import "./App.css";

function UseEffect() {
    const[count,setcount]=useState(0);
     // useEffect runs after component renders
    useEffect(()=>{
        console.log("Effect runs!");
        document.title=`You clicked${count} times`; // Update browser title
    },[count])  // run when count changes
  return (
    <div style={{
        textAlign: "center",
        marginTop: "100px",
        background: "#f9f9f9",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 10px gray",
      }}>
      <h2> UseEffect</h2>
      <p >You Clicked {count} times</p>
    <button onClick={() => setcount(count + 1)}
       style={{
          background: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
          
        }} 
        >Click_Me
        </button>

    </div>
  )
}

export default UseEffect
