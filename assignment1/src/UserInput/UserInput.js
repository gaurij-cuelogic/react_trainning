import React from 'react';

const style = {
    backgroundColor : "white",
    width : "25%",
    border: "2px solid #ccc",
    marginTop :"60px"
  };

const UserInput = (props) => {

let j = [];

    for(let x= 0; x<1;x++){
        let i= (<div>       
         <input type ="text" style = {style} onChange = {props.changeInputHandlerName} />
        <input type ="text" style = {style} onChange = {props.changeInputHandlerAge} />
        </div>)
       j.push(i)

    }

    return (
        <div className ="App">
           {j}
        </div>
    )
};

export default UserInput;