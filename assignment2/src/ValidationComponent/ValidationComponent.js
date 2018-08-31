import React from 'react';


const ValidationComponent = (props) =>
{
    let ValidationLength = null;
    
    if(props.length < 5)
    {
        ValidationLength = "Text too short"
    }
    else if(props.length >10)
    {
        ValidationLength ="text too long"
    }
    return(
        <div>
            <p>{ValidationLength}</p>
        </div>
    )
}

export default ValidationComponent;