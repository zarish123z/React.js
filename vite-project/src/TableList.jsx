import React,{useState} from 'react'

function TableList() {
    //   Create an array of student objects
  const students = [
    { id: 1, name: "Zarish", age: 22, gender: "male" },
    { id: 2, name: "Maryam", age: 21, gender: "female"  },
    { id: 3, name: "Hassan", age: 19, gender: "male"  },
    { id: 4, name: "Zara", age: 21, gender: "female"  },
  ];
    //  Use filter() to show only male students
  // const malestudents = students.filter((s) => s.gender === "male");
 //const above19 = students.filter(s => s.age > 19);
                  // OR using useState Dropdown menu filterning


     const[filterGender,setfilterGender ]= useState("All"); 
     
     const FilteredStudents =students.filter((s)=> filterGender ==="All" || s.gender === filterGender);

     // Reduce Method — to calculate total & average age
  const totalAge = FilteredStudents.reduce((sum, s) => sum + s.age, 0);
     // ternary operator
  const averageAge = FilteredStudents.length ? (totalAge / FilteredStudents.length):0; 

    //   Common style for each table cell (th & td)
  // So we don’t repeat the same code again and again
  const cellStyle ={border: "1px solid gray",padding:"10px",}
   
  return (
    <div style={{textAlign:"center",marginTop:"60px"}}>
      <h2> Student table</h2>

         {/*  Dropdown menu with styling */}
         <select
         value={filterGender}
         onChange={(e)=>setfilterGender(e.target.value)}
         style={{padding:"8px",marginBottom:'15px',borderRadius:"5px",fontsize:"16px"}}
         >
          <option value="All">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          
         </select>


      <table style={{
          margin: "20px auto",
          borderCollapse: "collapse",
          width: "100%",
          background: "white",
          boxShadow: " 10px 5px 5px gray ",
        }}>
        {/* table header top_row */}
        <thead>
          <tr style={{background:"#0984e3",color:"white"}}>
          <th style={cellStyle}> ID</th> 
          <th style={cellStyle}> NAME</th> 
          <th style={cellStyle}> AGE</th> 
          <th style={cellStyle}> GENDER</th> 
          </tr>
        </thead>
        {/* Table Body (data rows) */}
        <tbody>
          {/* loop through students array using .map() fuction */}
         {FilteredStudents.map(({id, name, age, gender})=>(
          <tr key={id}>
            <td style={cellStyle}>{id}</td>
            <td style={cellStyle}>{name}</td>
            <td style={cellStyle}>{age}</td>
            <td style={cellStyle}>{gender}</td>

          </tr>
         )
        )}
        </tbody>
      </table>

      
      {/*   Reduce Output */}
      <p>
        <strong>Total Age:</strong> {totalAge}
      </p>
      <p>
        <strong>Average Age:</strong> {averageAge}
      </p>
    </div>
  )
}

export default TableList
