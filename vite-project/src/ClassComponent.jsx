import React, { Component } from "react";


class ClassComponent extends Component{
    constructor(props){
super(props); // must call super to use 'this'

// this.method={
//     message:'Hello! This is a Class Componenet'
// }
}
    render(){
        return(
<div>
    <h1>'Hello! This is a Class Componenet'</h1>
    <p> Welcome!{this.props.name}</p>
</div>
                )
    }
}
export default ClassComponent