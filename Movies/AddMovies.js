import React from "react";
import "./AddMovies.css";
import AddForm from "./AddForm";

export default class AddMovies extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            MovieForm: false,
           
        }
    }
//  add movie function
    MovieFormshow = () => {
      this.setState({MovieForm: true});
    }
    
    render(){
        return(
            <div className="add-container">
                <button className="add-button" onClick={this.MovieFormshow} >Add Movies</button>
                {this.state.MovieForm && <AddForm/>}
            </div>
        )
    }
} 