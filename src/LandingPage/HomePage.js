import React from "react";
import "./HomePage.css";
// import logo from " /Users/enjoy_18_b/Documents/react/react-project-one/src/LandingPage/assets/Dev4.png";
import Dev4 from "../LandingPage/assets/Dev4.png";

export default class HomePage extends React.Component{
    render(){
        return(
            <div className="main-container">
                <nav>
                    <div className="nav-logo">
                        <h2>HomePage</h2>
                    </div>
                    <div className="nav-links">
                        <h2>Home</h2>
                        <h2>About</h2>
                        <h2>Project</h2>
                        <h2>Contact</h2>
                    </div>
                </nav>
                <div className="container">
                <div className="info">
                <h1>Hi, I'm Divya Bondre</h1>
                <p>A Full-Stack Developer</p>
                </div>
                <div className="image">
                <img scr={{Dev4}}
               style={{height: "250px", width: "250px"}} 
               />   
                </div>
                </div> 
            </div>
        )
    }
}

 