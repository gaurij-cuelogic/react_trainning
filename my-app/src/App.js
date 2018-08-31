import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let person = null;

    if (this.state.showPersons === true) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1> I am a react app!</h1>
        <p>a paragraph</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {person}
      </div>

    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'statement2'));
  }
}

export default App;
