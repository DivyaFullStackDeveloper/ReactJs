import React from "react";
import "./Image.css"
import flower from "../assets/flower2"
export default class ImageTwo extends React.Component{
    render(){
        return(
            <div className="container-two">
                <img scr={flower} className="Image"></img>
            </div>
        )
    }
}