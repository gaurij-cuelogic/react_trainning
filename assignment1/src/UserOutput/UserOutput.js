import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    var i = [];
    let length = props.UserOutputName.length;

    for (let j = 0; j < length; j++) {
        let k = (<div className="UserOutput">
            <p onChange={props.changeName} > I am  {props.UserOutputName[j].userName} </p>
            <p>{props.children}</p>
          <p onChange={props.changeAge}>age is {props.UserOutputAge[j].userAge}</p>
        </div>
        )
        i.push(k);
    }

 return (
        <div>
            {i}
        </div>
    );
}

export default UserOutput;
