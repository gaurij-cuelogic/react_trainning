import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class Michelle extends Component {


    render () {
        const PEEPS = [
            { id: 0, name: "Michelle", friends: [1, 2, 3] },
            { id: 1, name: "Sean", friends: [0, 3] },
            { id: 2, name: "Kim", friends: [0, 1, 3] },
            { id: 3, name: "David", friends: [1, 2] }
          ];
    
        //    let friendArray = [];
        //    friendArray = PEEPS[this.props.match.params.id].friends
             
     
        
        return (
            <div>
                <ul style={{ listStyle: "none" }}>
              <li>
              <NavLink to="/1">Sean</NavLink>
            </li>
            <li>
              <NavLink to="/2">Kim</NavLink>
            </li>
            <li>
              <NavLink to="/3">David</NavLink>
            </li>
            </ul>
            
            </div>
        );
    }
}

export default Michelle;