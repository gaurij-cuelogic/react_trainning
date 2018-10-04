import React, { Component } from 'react';
import { Route, BrowserRouter, Switch , Link,NavLink, Redirect} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import PageError from './Component/PageError';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <nav>
        <ul style ={{listStyle : "none" }}>
          <li>
          <Link to ="/courses">Courses</Link>
          </li>
          <li>
          <NavLink to ="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
     <Switch>
       <Route path = "/users" component = {Users} /> 
       <Route path = "/courses" component = {Courses} />
       <Redirect from='/all-courses' to='/courses' />
       <Route component = {PageError} /> 
      
                </Switch> 
    
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

