import React from "react";
import "./MoviesHeader.css"
import AddMovies from "./AddMovies";

export default class MoviesHeader extends React.Component {
    render(){
        return(
            <div className="header">
            <b className="name">Movies</b>
                <AddMovies/>
            </div>
        )
    }
}