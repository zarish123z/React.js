import { useState } from "react";  // import usestate
function UseState_FC(){
const [count , setCount]= useState(0);  // declare use_state hook to create variable 
 
const increase = () => setCount(count + 10); // increase count by 1
  const decrease = () => setCount(count - 50); //decrease count by -1
  const reset = () => setCount(0);  // 

return(
    <div style ={{textAlign:"center",marginTop: "50px"}}>
        <h1> React Use_State  </h1>
        <h2> Count :{count}</h2>

        <div>
        <button onClick={increase}
        style={{
            backgroundColor : "tomato",
            color : "white",
            padding:"15px 25px",
            fontSize:"18px",
            border:"none",
            borderRadius:"10px",
            cursor:"pointer",
        }}
        >
         Click to Increase_numbers
        </button>
        <br></br>
        <br></br>
        <button onClick ={decrease}

        style={{
            backgroundColor : "green",
            color : "white",
            padding:"15px 25px",
            fontSize:"18px",
            border:"none",
            borderRadius:"10px",
            cursor:"pointer",
            

        }}
        >
            click to decrese
        </button>
        <br></br>

        <br></br>

          <button onClick ={reset}

        style={{
            backgroundColor :"yellowgreen",
            color : "white",
            padding:"15px 25px",
            fontSize:"18px",
            border:"none",
            borderRadius:"10px",
            cursor:"pointer",
            

        }}
        >
            click to reset
        </button>
        
    </div>
    </div>
);
};
export default UseState_FC