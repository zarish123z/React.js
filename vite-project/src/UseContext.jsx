import { createContext, useState } from "react";

//  Step 1: Create Context
// Context aik global store jaisa hota hai jo data ko share karta hai without props.
export const UserContext = createContext();

function UseContext({ children }) {
  //  Step 2: Global state banayi
  // Ye "user" value tamam components ko accessible hogi.
  const [user, setUser] = useState("Zarish");

  return (
    //  Step 3: Provider wrap karta hai child components ko
    // Jis se sab components `user` aur `setUser` ko use kar sakte hain.
    <UserContext.Provider value={{ user, setUser }}>
      {children} {/*  Children = App ka sara UI yahan load hoga */}
    </UserContext.Provider>
  );
}

export default UseContext;
