import React from "react";

export default class SimpleOne extends React.Component{
    render(){
        return(
            <div style={{backgroundColor: "lightskyblue", padding: "20px", height:" 90px"}}>
                <h1>{"Hello World"}</h1>
                <p>{"Welcome to React"}</p>
            </div>
        )
    }
}