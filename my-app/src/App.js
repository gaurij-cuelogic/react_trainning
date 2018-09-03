import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js'

class App extends Component {
  state = {
    persons: [
      { id: "1a", name: "gauri", age: 21 },
      { id: "1b", name: "abc", age: 25 },
      { id: "1c", name: "xyz", age: 20 }
    ],
    otherState: "otherstate",
    showPersons: "false"
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
   }

   person.name = event.target.value;
   const persons = [...this.state.persons];
   persons[personIndex] = person;

    this.setState({
      persons : persons
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
   
    let person = null;
    let btnClass = ""; 

    if (this.state.showPersons === true) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key = {person.id}> 
              <Person
              click={() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              changed = {(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
          })}
        </div>
      );

      btnClass = classes.red;
    }

    const AssignedClasses= [];
    if(this.state.persons.length <=2)
    {
      AssignedClasses.push(classes.red);
    }
    if(this.state.persons.length<=1)
    {
      AssignedClasses.push(classes.bold);
    }
    return (
     
      <div className={classes.App}>
        <h1> I am a react app!</h1>
        <p className = {AssignedClasses.join(" ")}>a paragraph</p>
        <button
        className = {btnClass}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {person}
      </div>
     

    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'statement2'));
  }
}

export default App;
