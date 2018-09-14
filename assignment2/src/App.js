import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';
import CharComponent from './CharComponent/CharComponent.js';

class App extends Component {

  state = {
    letters: "",
    length: "0",
    }

  textChangeHandler = (event) => {
    
    let newlength = event.target.value.length;
    this.setState({
      length: newlength,
      letters : event.target.value


})  
}

changeState = (element) =>
{
  this.setState({
    seperatedString : element })
  
}

deleteCharHandler = (charIndex) => {
  //this.textChangeHandler();
  let character = this.state.letters;
  let characterArray = [];
  characterArray = character.split("");

  //console.log(typeof(this.state.letters))
 //seperatedString = [...seperatedString];
  characterArray.splice(charIndex,1); 
  let stringElement = characterArray.join("");
  
  this.setState({
  letters : stringElement,
  })
 }
 
 // 
render() {
    let userString = null;
    let element =this.state.letters.split("");


    // console.log(typeof(seperatedString));
    if (this.state.length > 0) {
    userString = (
        <div>
          {element.map((seperatedString,index) => {
            return <CharComponent
          letters = {seperatedString}
            key = {index}
            click={() => this.deleteCharHandler(index)}
            oneLetter = {seperatedString}
          />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <input type="text" value = {this.state.letters} onChange={this.textChangeHandler} />
        <p> length of string : {this.state.length} </p>
        <ValidationComponent length={this.state.length} />
        {userString}
      </div>
    );
  }
}
  export default App;
