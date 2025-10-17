import React, { useState } from "react";

function OnChange_FC() {
  const [form, setForm] = useState({name: "", email: "", password: "", city: "",});

  // Generic handler for all inputs
const handleChange = (event) => {setForm({...form,       // keep old field values
 [event.target.name]: event.target.value, // update only the changed field
  });
};


  const handleSubmit = () => {
    alert(`Name: ${form.name}\nEmail: ${form.email}\nPassword: ${form.password}\nCity: ${form.city}`
    )
  };

  return (
    <div
      style={{
        padding: "30px",
        border: "5px solid #7e1818ff",
        borderRadius: "10px",
        textAlign: "center",
        marginTop: "50px",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Form ON_CHANGE EVENT</h2>
        <label>🧍Name: </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          style={{ padding: "8px", margin: "10px", backgroundColor: "aqua" }}
        />
        <br />
        <br />
        <label>📧Email: </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          style={{ padding: "8px", margin: "10px", backgroundColor: "aqua" }}
        />
        <br />
        <br />
        <label>🔑Password: </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          style={{ padding: "8px", margin: "10px", backgroundColor: "aqua" }}
        />
        <br />
        <br />
        <label>🏙️City: </label>
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="city_name"
          style={{ padding: "8px", margin: "10px", backgroundColor: "aqua" }}
        />
        <br />
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#7e1818",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default OnChange_FC;