// dashboard container
import React from "react";
import "./Dashboard.css"
import PanalA from "./PanalA";

export default class Dashboard extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        total: 0,
      };
    }
    // onclick-function
    onCoinClick = (coin) => {
     if (coin == "One"){
        this.setState({total: (this.state.total += 1 )})
     }else if (coin == "Two"){
        this.setState({total: (this.state.total += 2) })
     }else if (coin == "Five"){
        this.setState({total: (this.state.total += 5) })
     }else if (coin == "Ten"){
        this.setState({total: (this.state.total += 10)})
     }else {
        this.setState({total: (this.state.total += 20)})
     }
    };
    render(){
        return(
            // main-container
            <div className="main-container">
            {/* counter-div */}
            <div 
            className="counter">{this.state.total}
            </div>
                <PanalA onCoinClick={this.onCoinClick}/>
            </div>
        )
    }
}