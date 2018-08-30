import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
   state = {
      persons : [
        {name : "gauri", age:21},
        {name : "abc", age:25},
        {name : "xyz", age:20}
      ],
      otherState : "otherstate"
   }

   switchNameHandler = (newName) =>{
     //console.log("called");
     // dont mutate like this : this.state.persons[0].name ="gauri joshi";
     this.setState({persons:[
      {name : newName, age:21},
      {name : "abc", age:25},
      {name : "xyz", age:88}

     ]})
   }

   nameChangedHandler = (event) => {
    this.setState({persons:[
      {name : "gauri", age:21},
      {name : event.target.value, age:25},
      {name : "xyz", age:88}

     ]})

   }

  render() {
      const style = {
        backgroundColor :"white",
        font : "inherit" ,
        border : "1px solid blue",
        padding : "8px",
        cursor :"pointer"
     }; 
     
       return (
       <div className="App">
         <h1> I am a react app!</h1>
         <p>a paragraph</p>
         <button 
         style ={style}
         onClick={() => this.switchNameHandler("gauri joshi!!")}>Switch name</button>
         <Person 
         name ={this.state.persons[0].name} 
         age ={this.state.persons[0].age} />
         <Person 
         name ={this.state.persons[1].name} 
         age ={this.state.persons[1].age}
         click ={this.switchNameHandler.bind(this,"gauri!")}
         changed= {this.nameChangedHandler}>Hobbies : racing</Person>
         <Person 
         name ={this.state.persons[2].name} 
         age ={this.state.persons[2].age}/>
       </div>
       
     );
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'statement2'));
  }
}

export default App;
