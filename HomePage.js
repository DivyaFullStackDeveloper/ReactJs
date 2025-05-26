import React, { Component } from "react";
import "./HomePage.css";
import ImdbDashboard from "./Movies/ImdbDashboard";
import CoinDashboard from "./RJ_Coins/Dashboard";
import ActorDashboard from "./ReactProjectes/Actor";
import FruitDashboard from "./ReactImage/FruitImage";
import BulbImage from "./ReactImage/Bulb";
 

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { name: "ImdbDashboard",component: <ImdbDashboard /> },
        { name: "CoinProject",component: <CoinDashboard /> },
       { name: "ActorsProject",component: <ActorDashboard /> },
        { name: "FruitsProject",component: <FruitDashboard /> },
        { name: "BulbProject",component: <BulbImage/> }
        
      ],
      selectedProject: null,  
    };
  }

  handleProjectClick = (project) => {
    this.setState({ selectedProject: project.component });
  };

  render() {
    return (
      <div className="Home-main-container">
        <div className="title-container">
        <h1 className="home-project-title">React Projects</h1>
        
        <div className="Projects-Container">
          {this.state.projects.map((project, index) => (
            <div
              key={index}
              className="project-box"
              onClick={() => this.handleProjectClick(project)}
              style={{ cursor: "pointer" }}
            >
              {project.name}
            </div>
          ))}
        </div>
        </div>
        <br />
        <div className="Project-Content">
          {this.state.selectedProject ? this.state.selectedProject : <p></p>}
        </div>
      </div>
    );
  }
}
