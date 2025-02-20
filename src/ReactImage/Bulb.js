import React, {useState} from "react";
import "./Bulb.css";

export default function Bulb(){
 const [ bulbreaction, setBulbReaction] = useState ("BulbOf");

 const image ={
    BulbOn: "./yelloBulb.png ",
    BulbOf: "./whiteBulb.png",
 };

 const onChangeColor = (event)=>{
    setBulbReaction(event.target.value);
  };
  return(
    <div className="container">
      <img 
      src={image[bulbreaction]} style={{width: "20vw", height:"60vh" }}/>
      <div className="btn">
        <div className="button-one">
             <button onClick={()=> setBulbReaction("BulbOn")}>On</button>
        </div>
        <div className="button-two">
             <button onClick={()=> setBulbReaction("BulbOf")}>Off</button>
        </div>
      </div>
    </div>
  )
}

