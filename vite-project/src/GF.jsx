// 📄 File: src/AllUseEffectExamples.jsx
import React, { useState, useEffect } from "react";

function AllUseEffectExamples() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  // 1️⃣ Console log
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // 2️⃣ Page title change
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  // 3️⃣ Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  // 4️⃣ API call
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // 5️⃣ Cleanup (already in timer above)

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>All useEffect Examples</h2>
      <p>Count: {count}</p>
      <h3>Fetched Users:</h3>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default AllUseEffectExamples;
