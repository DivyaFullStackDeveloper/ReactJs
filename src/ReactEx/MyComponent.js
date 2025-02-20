// import React from "react";
// import "./MyComponent.css";
// import { Button } from "@coreui/coreui";
// // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//         lastClicked: null,
//         changeButton: null,
//       counterone: 0,
//       countertwo: 0,
//     };
//   }

//   counterIncr = (buttonClicked) => {
//     this.setState({ 
//       lastClicked: buttonClicked,
//       changeButton: buttonClicked // Update the button state when clicked
//     });
//     this.setState((prevState) => ({ counterone: prevState.counterone + 1 }));
//   };

//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"20px"}
//     if(this.state.lastClicked ==="player one"){
//         textStyle={color:"yellow",fontSize:"20px"}
//     } else if(this.state.lastClicked ==="player two"){
//         textStyle={color:"green",fontSize:"20px"}
//     } else if(this.state.lastClicked ==="player three"){
//         textStyle={color:"purple",fontSize:"20px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>

//   };

//   renderButton = (playerName) => {
//     const isSelected = this.state.changeButton === playerName; // Check if the button is selected
//     const btnStyle = isSelected
//       ? { backgroundColor: "lightcora", fontSize: "20px" } // Green for the selected button
//       : { backgroundColor: "green", fontSize: "20px" }; // Default style

//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={btnStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {

//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("player one")}
//         {this.renderButton("player two" )}
//         {this.renderButton("player three")}
//       </div>
//     );
//   }
// }
// export default MyComponent;

// --------------

// import React from "react";
// import "./MyComponent.css";
// import { Button } from "@coreui/coreui";
// // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//         lastClicked: null,
//         changeButton: null,
//       counterone: 0,
//       countertwo: 0,
//     };
//   }

//   counterIncr = (buttonClicked) => {
//     this.setState({ 
//       lastClicked: buttonClicked,
//       changeButton: buttonClicked // Update the button state when clicked
//     });
//     this.setState((prevState) => ({ counterone: prevState.counterone + 1 }));
//   };

//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"20px"}
//     if(this.state.lastClicked ==="player one"){
//         textStyle={color:"yellow",fontSize:"20px"}
//     } else if(this.state.lastClicked ==="player two"){
//         textStyle={color:"green",fontSize:"20px"}
//     } else if(this.state.lastClicked ==="player three"){
//         textStyle={color:"purple",fontSize:"20px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>

//   };

//   renderButton = (playerName) => {
//     const isSelected = this.state.changeButton === playerName; // Check if the button is selected
//     const btnStyle = isSelected
//       ? { backgroundColor: "green", fontSize: "20px" } // Green for the selected button
//       : { backgroundColor: "lightcora", fontSize: "20px" }; // Default style

//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={btnStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {

//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("player one")}
//         {this.renderButton("player two" )}
//         {this.renderButton("player three")}
//       </div>
//     );
//   }
// }
// export default MyComponent;

// ---------------------

import React from "react";
import "./MyComponent.css";
import { Button } from "@coreui/coreui";
// import { CAlert } from '@coreui/react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      lastClicked: null,
      counterone: 0,
      countertwo: 0,
      buttonArray:[true,true,true,true,true,true,true,true,true,true,true],
       
    };
  }
  counterIncr = (index, buttonClicked) => {
    
    let copiedArray ={...this.state.buttonArray};
    copiedArray[index]= false;
    this.setState({buttonArray : copiedArray})
 
    // this.setState({lastClicked: buttonClicked});
    this.setState({ counter: ++this.state.counterone });
  };
  renderScore = () => {
    return <text>{this.props.teamName}</text>;
  };

  renderButton = (index, playerName) => {
     // const isSelected = this.state.changeButton === playerName; // Check if the button is selected
    // const btnStyle = isSelected
    //   ? { backgroundColor: "green", fontSize: "20px" } // Green for the selected button
    //   : { backgroundColor: "lightcoral", fontSize: "20px" }; // Default style

    // let btnstyle = { backgroundColor: "lightcoral", fontSize: "20px"}
    // if (this.state.lastClicked == playerName){
    //   btnstyle = { backgroundColor: "green", fontSize: "20px"};
    // }
    // let ispresent = this.state.lastClicked.indexOf.(playerName) > -1;
    let buttonStyle = this.props.buttonStyle;
    return (
      <button
        className="button"
        style={buttonStyle}
        onClick={()=>this.counterIncr(index, playerName)  }
      >
        {playerName}
      </button>
    );
  };
  render() {
    return (
      <div className="team">
        {this.renderScore()}
        {this.state.buttonArray[0] ? this.renderButton(0,"player one"):null}
        {this.state.buttonArray[1] ? this.renderButton(1, "player two"):null}
        {this.state.buttonArray[2] ? this.renderButton(2, "player three"):null}
        {this.state.buttonArray[3] ? this.renderButton(3, "player four"):null}
        {this.state.buttonArray[4] ? this.renderButton(4, "player five"):null}
        {this.state.buttonArray[5] ? this.renderButton(5, "player six"):null}
        {this.state.buttonArray[6] ? this.renderButton(6, "player seven"):null}
        {this.state.buttonArray[7] ? this.renderButton(7, "player eight"):null}
        {this.state.buttonArray[8] ? this.renderButton(8, "player nine"):null}
        {this.state.buttonArray[9] ? this.renderButton(9, "player ten"):null}
        {this.state.buttonArray[10]? this.renderButton(10,"player eleven"):null}
      </div>
    );
  }
}
export default MyComponent;