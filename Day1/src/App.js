import React from "react";
import "./App.css";
import Button from "./button";
const Hello=()=>{
    return(
        <div>
            <h1>Hello, welcome to ReactJS</h1>
            <h3>React is a JavaScript library for building user interfaces.</h3>
            <Button buttonText="welcome" />
        </div>
        
    )
}

export default Hello;