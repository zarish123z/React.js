import React, { useState } from "react";

function OnChange_FC() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    agree: false,
  });

  //  Validation error messages
  const [errors, setErrors] = useState({});

  //  Generic handler for all inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  //  Form Validation Function
  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required!";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email!";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters!";
    }

    if (!form.country) {
      newErrors.country = "Please select a country!";
    }

    if (!form.agree) {
      newErrors.agree = "You must agree to terms!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    if (validateForm()) {
      alert(
        `Name: ${form.name}\nEmail: ${form.email}\nPassword: ${form.password}\nCountry: ${form.country}\nAgree: ${form.agree}`
      );
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        border: "5px solid #7e1818ff",
        borderRadius: "10px",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Form ON_CHANGE EVENT</h2>

        {/* Name */}
        <label>🧍Name: </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          style={{ padding: "8px", margin: "10px", backgroundColor: "aqua" }}
        />
        {/* Error below input */}
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <br />

        {/* Email */}
        <label>📧Email: </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          style={{ padding: "8px", margin: "10px", backgroundColor: "aqua" }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <br />

        {/* Password */}
        <label>🔑Password: </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          style={{ padding: "8px", margin: "10px", backgroundColor: "aqua" }}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <br />

        {/* Country */}
        <label>🌍 Country: </label>
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          style={{ padding: "8px", margin: "10px", backgroundColor: "aqua" }}
        >
          <option value="">Select Country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
        <br />

        {/* Checkbox */}
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          I agree to terms & conditions
        </label>
        {errors.agree && <p style={{ color: "red" }}>{errors.agree}</p>}
        <br />

        {/* Submit */}
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

      {/* Show submitted data only when valid */}
      {form.name && form.email && form.country && form.agree ? (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3> Submitted Data:</h3>
          <p><b>Name:</b> {form.name}</p>
          <p><b>Email:</b> {form.email}</p>
          <p><b>Country:</b> {form.country}</p>
          <p><b>Agreement:</b>  Accepted</p>
        </div>
      ) : null}
    </div>
  );
}

export default OnChange_FC;
