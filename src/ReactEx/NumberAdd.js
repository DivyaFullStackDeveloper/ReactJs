import React from "react";
import "./NumberAdd.css"

class NumberAdd extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }
    render(){
        return(
            <div className="number-folder">
            <button className="click-button">
            <input type="number" id="input"></input>
            <input type="number" id="input"></input>
            <input type="number" id="input"></input>
            <button type="button" onClick="Add()"></button>
            </button>
            </div>

        )
    }
}
export default NumberAdd;