import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);


class App extends PureComponent {

constructor(props){
    super(props);
    console.log("[App.js] inside constructor",props);
    this.state = {
      persons: [
        { id: "1a", name: "gauri", age: 21 },
        { id: "1b", name: "abc", age: 25 },
        { id: "1c", name: "xyz", age: 20 }
      ],
      otherState: "otherstate",
      showPersons: false,
      toggleClicked : 0,
      auth : false
    }
  }

  componentWillMount(){
   console.log("[App.js] inside ComponentWillMount()");
  }

  componentDidMount(){
    console.log("[App.js] in ComponentDidMount()");
  }

 /* shouldComponentUpdate(nextProps , nextState){
    console.log("[UPDATE App.js] in shouldComponentUpdate()",nextProps,nextState);
    return nextState.persons !== this.state.persons ||
    nextState.showPersons !== this.state.showPersons;
  }*/

  componentWillUpdate(nextProps, nextState){
      console.log("[UPDATE App.js] in componentWillUpdate",nextProps,nextState);
  }

  static getDerivedStateFromProps(nextProps,prevState){
    console.log("[UPDATE App.js] in getDerivedStateFromProps",nextProps,prevState);
    return prevState;
  }

 getSnapshotBeforeUpdate(){
  console.log("[App.js] in getSnapshotBeforeUpdate()");
 }

  componentDidUpdate(){
    console.log("[UPDATE App.js] in componentDidUpdate");
  }
  /*state = {
    persons: [
      { id: "1a", name: "gauri", age: 21 },
      { id: "1b", name: "abc", age: 25 },
      { id: "1c", name: "xyz", age: 20 }
    ],
    otherState: "otherstate",
    showPersons: "false"
  }*/

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
    let doesShow = this.state.showPersons;
    this.setState((prevState, props) => { 
      return {showPersons: !doesShow,
        toggleClicked : prevState.toggleClicked +1}
       });
  }

  loginHandler = () => {
    console.log("before setstate", this.state.auth);
   this.setState({
    auth : true });
   console.log("after setstate",this.state.auth);
  }


  render() {
   console.log("[App.js] in render");
    let person = null;
    

    if (this.state.showPersons) {
      person = 
          <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          />;

      
    }

    
    return (
     <Aux>
              <button onClick = {() =>{this.setState({showPersons : true})}} >Show Persons</button>
      <Cockpit 
      login = {this.loginHandler}
      AppTitle = {this.AppTitle}
      showPersons ={this.state.showPersons} 
      persons ={this.state.persons}
      clicked = {this.togglePersonHandler}
      />
      <AuthContext.Provider value ={this.state.auth}> {person}</AuthContext.Provider>
       
        </Aux>
     );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'statement2'));
  }
}

export default withClass(App,classes.App);
