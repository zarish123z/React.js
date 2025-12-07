import React, { useState, useCallback } from "react";

//  product list
const products = ["Apple", "Banana", "Mango", "Grapes", "Orange", "Papaya"];

function UseCallback() {
  const [search, setSearch] = useState("");
  

  //  useCallback -> filtering function memoized
  // Only re-creates when `search` value changes
  const filteredProducts = useCallback(() => {
    return products.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
        padding: "30px",
        width: "350px",
        marginInline: "auto",
        background: "#e8f5e9",
        borderRadius: "10px",
        boxShadow: "0 0 10px gray",
      }}
    >
      <h2> useCallback Search Filter</h2>

      {/* Input changes -> only search state update */}
      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "80%",
          borderRadius: "5px",
          border: "1px solid gray",
          marginBottom: "15px",
        }}
      />

      

      {/*  Call memoized function */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredProducts().map((item, index) => (
          <li
            key={index}
            style={{
              padding: "6px",
              background: "#ffffffff",
              margin: "4px 0",
              borderRadius: "5px",
              boxShadow: "0 0 5px lightgray",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseCallback;
