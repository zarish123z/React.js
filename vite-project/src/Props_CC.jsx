
import React, { Component } from "react";

class Props_CC extends Component {
  render() {
    //  props using this.props
    // const{name,course}= this.props

    return (
      <div>
        <h2>Welcome, {this.props.name}!</h2>
        <p>You are learning: {this.props.course}</p>
      </div>
    );
  }
}

export default Props_CC;
