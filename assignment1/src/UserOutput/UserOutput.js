import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
   return(
   <div className ="UserOutput">
       <p onChange = {props.change}> I am {props.name}</p>
       <p>{props.children}</p>
        <p>age is {props.age}</p>
    </div>
   );
}

export default UserOutput;