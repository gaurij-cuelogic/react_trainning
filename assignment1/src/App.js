import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
   UserOutput : [
      {userName : "gauri"},
      {userName : "pallavi"},
      {userName : "abc"}
    ]

  };

  changeInputHandler = (event) =>
  {
       this.setState ({
         UserOutput : [
           {userName : event.target.value},
           {userName : event.target.value},
           {userName : event.target.value}
          ]
  })
}


  render() {
    
    return (
      <div className="App">
       <h1>React assignmnet 1</h1>
        <UserInput   
        change = {this.changeInputHandler} />
        <UserOutput 
        name = {this.state.UserOutput[0].userName} 
        age ="28" 
        />
        <UserOutput name = {this.state.UserOutput[1].userName} 
        age ="20" />
        <UserOutput name = {this.state.UserOutput[2].userName}
         age ="38" />
      </div>
    );
  }
}

export default App;
