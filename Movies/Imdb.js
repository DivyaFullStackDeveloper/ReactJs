import React from "react";
import "./Imdb.css";
import MoviesHeader from "./MoviesHeader";
import MoviesPanal from "./MoviesPanal";

export default class Imdb extends React.Component {
    render(){
        return(
            <div className="movies-main-container">
              <MoviesHeader/>
              <MoviesPanal/>
              
            </div>
        )
    }
}
    