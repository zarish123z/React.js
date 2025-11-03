import { useState ,useMemo } from "react";
function UseMemo(){
    
    // Heavy function (slow function)
    const slowCalculation =(num)=>{
        console.log("Calculating....")  // Check how many items it run
        for (let i=0 ; i<1000000000; i++){

        }
        return num*2;
    };

      const [count ,setCount] = useState(2);
    const [dark, setDark]= useState(false);

    // useMemo store result & re-runs only when "count Changes"
    const calval = useMemo(()=> slowCalculation(count) ,[count]);

    return(
        <div
              style={{
        textAlign: "center",
        height: "80vh",
        padding:"25px",
        paddingTop: "60px",
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        transition: "0.3s",
      }}>
        <h2> UseMemo..</h2>
        <h3> Count:{count}</h3>
        <h3> Calculated value:{calval}</h3>

        <button
        onClick={()=> setCount(count+1)}
        style={{ marginRight: "10px", padding: "6px 12px", backgroundColor:"teal" }}
        >
            + Increase Count
        </button>

        <button
        onClick={()=> setDark(!dark)}
         style={{ padding: "6px 12px" , backgroundColor:"red"}}
        >
        Toggle Theme
        </button>
        </div>
    )
}
 export default UseMemo;