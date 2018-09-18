import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
   UserOutputName : [
      {userName : "gauri"},
      {userName : "pallavi"},
      {userName : "abc"}
    ],
    UserOutputAge : [
      {userAge : 20},
      {userAge : 21},
      {userAge : 22}
    ]

  };

  changeInputHandlerName = (event) =>
  {
       this.setState ({
         UserOutputName : [
           {userName : event.target.value},
           {userName : event.target.value},
           {userName : event.target.value}
          ]
  })
}

changeInputHandlerAge = (event) =>
  {
       this.setState ({
         UserOutputAge : [
           {userAge : event.target.value},
           {userAge : event.target.value},
           {userAge : event.target.value}
          ]
  })
}


  render() {
       return (
      <div className="App">
       <h1>React assignmnet 1</h1>

         <UserInput   
        changeInputHandlerName = {this.changeInputHandlerName}
        changeInputHandlerAge = {this.changeInputHandlerAge}        />
            
       
       
           <UserOutput
         UserOutputName = {this.state.UserOutputName}
         UserOutputAge = {this.state.UserOutputAge}/>
         

      </div>
    );
  }
}

export default App;