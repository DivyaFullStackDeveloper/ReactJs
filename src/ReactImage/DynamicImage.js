import React, {useState} from "react";
import "./DynamicImage.css"


export default function DynamicImage (){
    const [chooseFruit, setSelectedFruit] = useState ("Apple");

    const photos = {
        apple: "./apple1.jpeg",
        banana: "./banana1.webp",
        orange: "./orange1.jpg",
    };

    const onSelectChange = (event) => {
        console.log("onSelectChange")
        setSelectedFruit(event.target.value);
    };

    return(
        <div className="container">
            <h1>Select a Fruit</h1>

            <select className="fruit-list" onChange={onSelectChange}>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            </select>

            <h2>You selectedFruit: {chooseFruit}</h2>

            <img 
            style={{ width: "12vw", height:"20vh",margin: "30px" }}
            src={photos[chooseFruit]}/>
            
        </div>
    )
}