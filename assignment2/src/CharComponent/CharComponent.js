import React from 'react';

const CharComponent = (props) =>
{
    const style ={
        display : "inline-block",
        padding : "16px",
        textAlign : "center",
        margin : "16px",
        border : "1px solid black"
         }
      
    return (
        <div>
           <p onClick = {props.click} style = {style}> {props.oneLetter}</p>
        </div>
    )
}

export default CharComponent;