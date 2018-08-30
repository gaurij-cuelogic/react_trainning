import React from 'react';

const style = {
    backgroundColor : "white",
    width : "25%",
    border: "2px solid #ccc",
    marginTop :"60px"
  };

const UserInput = (props) => {
    return (
        <div className ="App">
            <input type ="text" style = {style} onChange = {props.change} value ={props.name} />
        </div>
    )
};

export default UserInput;