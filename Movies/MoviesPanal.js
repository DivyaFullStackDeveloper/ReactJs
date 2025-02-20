import React from "react";
import "./MoviesPanal.css";
 
export default class MoviesPanal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Array:[]
        }
    }
    render(){
        return(
        <div className="movies-panal">     
        <b className="list-title">Movies List</b>
        </div>
        )
    }
}