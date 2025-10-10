
import React from "react";

// Functional Component using props
function PropsFC({ name, age }) {
  return (
    <div>
      <h2>👤 Hello, {name}!</h2>
      <p>🎂 Your age is: {age}</p>
    </div>
  );
}
export function Profile(){
    return(
        <h3> Your profile : 👤... </h3>
    )
}


export default PropsFC;
