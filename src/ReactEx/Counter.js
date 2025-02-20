import React from "react";
import "./Counter.css";

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.state= {buttonClick:0}
  }
render(){
    return(
        <div classNmae="Folder">
          <button 
          style={this.props.buttonStyle}
          classNmae="incre-button"
          onClick={() => this.setState({buttonClick:  ++this.state.buttonClick })}
          >
            <text className="btn-style"> My Button{this.state.buttonClick}</text>
          </button>
        </div>
    )
  }
}
    export default Counter;