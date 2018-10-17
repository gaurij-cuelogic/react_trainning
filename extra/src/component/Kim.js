import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class Kim extends Component {
    render () {
        return (
            <div>
                <ul style={{ listStyle: "none" }}>
                    <li>
                  <Link to="/0">Michelle</Link>
            </li>
            <li>
              <Link to="/1">Sean</Link>
            </li>
            <li>
              <Link to="/3">David</Link>
            </li>
            </ul>
            </div>
        );
    }
}

export default Kim;