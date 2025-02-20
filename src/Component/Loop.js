import React from "react"; 

export default class Loop extends React.Component{
    render(){
        const fruits = ["Apple", "Banana ", "Orange", "Mango", "Pineapple"  ];
        return(
            <div>
                <h1>{ "Fruit List" }</h1>
                 <ul>
                    {fruits.map((item, index) => {
                     return <li>{item}</li>;
                })}
                 </ul>
            </div>
        )
    }
}