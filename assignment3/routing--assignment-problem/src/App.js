import React, { Component } from 'react';
import { Route, BrowserRouter, Switch , NavLink} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <nav>
        <ul style ={{listStyle : "none" }}>
          <li>
          <NavLink to ="/courses">Courses</NavLink>
          </li>
          <li>
          <NavLink to ="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
      
       <Route path = "/users" component = {Users} /> 
       <Route path = "/courses/:courseId" component = {Course} /> 
       <Route path = "/courses" component = {Courses} />
       </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
