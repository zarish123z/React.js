
import React, { Component } from "react";

class Props_CC extends Component {
  render() {
    //  props using this.props
    const { name, course } = this.props;

    return (
      <div>
        <h2>Welcome, {name}!</h2>
        <p>You are learning: {course}</p>
      </div>
    );
  }
}

export default Props_CC;
