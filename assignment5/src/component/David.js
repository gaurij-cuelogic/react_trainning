import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class David extends Component {
    render () {
        return (
            <div>
                <ul style={{ listStyle: "none" }}>
           <li>
              <Link to="/1">Sean</Link>
            </li>
            <li>
              <Link to="/2">Kim</Link>
            </li>
            </ul>
            </div>
        );
    }
}

export default David;