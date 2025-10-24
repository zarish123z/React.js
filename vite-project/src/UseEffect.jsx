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
    <div className="container">
      <h2 className="heading"> UseEffect</h2>
      <p className="text">You Clicked {count} times</p>
    <button onClick={() => setcount(count + 1)}>Click_Me</button>

    </div>
  )
}

export default UseEffect
