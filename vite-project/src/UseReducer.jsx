import React ,{useReducer} from "react";

// 1: initial Theme State
const initialState ={
    theme:"light",
}
// 2:  Function (Logic)
function themeReducer(state,action){
    switch(action.type){
        case "LIGHT":
            return{ theme :"light"};

             case "DARK":
            return{ theme :"dark"};

            default:
                return state;
    }
}

function UseReducer() {
    // 3: Connect reducer with UI
    const [state ,dispatch] = useReducer(themeReducer ,initialState)
  return (
    <div
    style={{
        textAlign:"center",
        height:"50vh",
        paddingTop:"80px",
        backgroundColor:state.theme === "light" ? "#ffffff" : "#1e1e1e",
        color:state.theme === "light" ? "#000000" : "#ffffff" 
    }}
    >
      <h2>  useReducer Theme Toggle </h2>
      <h3> Current Theme:{state.theme}</h3>

      {/* Light Button */}
      <button
      onClick={()=> dispatch({type : "LIGHT"})}
      style={{
          marginRight: "10px",
          padding: "8px 15px",
          borderRadius: "8px",
          cursor: "pointer",
        }}>
       ☀ Light
      </button>

      {/* Dark Button */}
          <button
      onClick={()=> dispatch({type : "DARK"})}
       style={{
          padding: "8px 15px",
          borderRadius: "8px",
          cursor: "pointer",
        }}>
       🌙 Dark
      </button>
    </div>
  )
}

export default UseReducer

