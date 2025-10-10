import React, { Component } from "react";

class FormState_CC extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }

  // Yeh function banye hain jo input ka data state main save karta hain
  updateName(e) {     // function of name
    this.setState({ name: e.target.value });
  }

  updateEmail(e) {  // fumction of email
    this.setState({ email: e.target.value });
  }
   handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${this.state.name}\nEmail: ${this.state.email}`);
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
         {/* https://emojipedia.org */}
        <h2>Simple Form </h2>

        {/* Input for Name */}
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          //function call 
          // onChange={this.updateName.bind(this)}
           onChange={(e) => this.setState({ name: e.target.value })}

          style={{ padding: "8px", margin: "10px" }}
        />
        <br />

        {/* Input for Email */}
        <input
          type="email"
          placeholder="Enter your email"
          value={this.state.email}
         onChange={this.updateEmail.bind(this)} //  function call or 

          style={{ padding: "8px", margin: "10px" }}
        />

        {/* <h3>Your name: {this.state.name}</h3>
        <h3>Your email: {this.state.email}</h3> */}
      </div>
    );
  }
}

export default FormState_CC;
