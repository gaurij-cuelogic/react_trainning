import React, { Component } from 'react';
import './App.css';
import { Link , Route} from 'react-router-dom';
import Sean from './component/Sean';
import Kim from './component/Kim';
import Michelle from './component/Michelle';
import David from './component/David'; 

class App extends Component {
  render() {

   


    return (
      <div className="App">
        <div className="Names">
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link to="/0">Michelle</Link>
            </li>
            <li>
              <Link to="/1">Sean</Link>
            </li>
            <li>
              <Link to="/2">Kim</Link>
            </li>
            <li>
              <Link to="/3">David</Link>
            </li>
          </ul>
        </div>
        <Route path = "/:id" component ={Michelle} />
      
      </div>
    );
  }
}

export default App;

