import React from "react";
import "./Profile.css"
import logo from '../assets/Image/Rj-logo.png'; 

export default class ProfileTwo extends React.Component{

   render(){
         return(
           <div className="Container-two">
           <img src={logo} className="Image" />
           </div>
       );
}
} 