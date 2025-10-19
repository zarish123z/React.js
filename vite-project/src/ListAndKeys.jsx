import React from "react";

function ListAndKeys() {
  //   Create an array of student objects
  const students = [
    { id: 1, name: "Ali", age: 20, gender: "male" },
    { id: 2, name: "Sara", age: 22, gender: "female"  },
    { id: 3, name: "Hassan", age: 19, gender: "male"  },
    { id: 4, name: "Zara", age: 21, gender: "female"  },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>📋 Student (List & key)</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {/*   Loop through the student array using .map()*/}
        {students.map((student) => (
          <li
            key={student.id} //  unique key
            style={{
              margin: "10px 0",
              padding: "12px",
              backgroundColor: "#0a3c63ff",
              color: "white",
              borderRadius: "6px",
              width: "200px",
              marginInline: "auto",
              fontSize: "16px",
            }}
          >
            {/*   Display name and age or gender */}
             {/* strong just for bold */}
            <strong>{student.name}</strong> <br></br>
             Age: {student.age} <br></br> 
             Gender : {student.gender} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListAndKeys;
