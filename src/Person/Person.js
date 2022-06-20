import React from "react";

const person = (props) => {
    return(
       <div>
            <p>My name is {props.name} and Im {props.age} years old</p>
            <input type='text' onChange={props.changed} value = {props.name}></input>
       </div>
    )
}


export default person;