import React from "react";
import "./AmazonApp.css";
import HeaderOne from "./HeaderOne";
import PanalOne from "./PanalOne";
 
export default class AmazonApp extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         // products: products,
    //         cartArray: [],
    //     }
    // }
    // addToCart = (data) => {
    //     this.setState({cartArray: [this.state.cartArray, data]});
    // };

    render(){
        return(
            <div className="Amazon-container">
             <HeaderOne/>
             <PanalOne/>
             {/* <HeaderOne cartCount={this.state.cartArray.length}/> */}
             {/* <PanalOne data={this.state.products} addToCart={this.addToCart}/> */}
            </div>
        );
    }
}