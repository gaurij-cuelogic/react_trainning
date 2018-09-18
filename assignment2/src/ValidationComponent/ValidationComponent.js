import React from 'react';


const ValidationComponent = (props) =>
{
    let ValidationLength = null;
    
    props.length < 5 ? ValidationLength = "Text too short" : (props.length > 10 ?  ValidationLength ="text too long" : null) 
   
    return(
        <div>
            <p>{ValidationLength}</p>
        </div>
    )
}

export default ValidationComponent;