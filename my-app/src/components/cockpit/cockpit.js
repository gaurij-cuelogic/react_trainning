import React from 'react';
import classes from './cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = (props) =>
{
    const AssignedClasses= [];
    let btnClass = classes.Button;
    if(props.showPersons === true){
        btnClass = [classes.Button,classes.red].join(" ");
    }
   
    if(props.persons.length <=2)
    {
      AssignedClasses.push(classes.red);
    }
    if(props.persons.length<=1)
    {
      AssignedClasses.push(classes.bold);
    }
    return( 
     <Aux>
         <h1> {props.AppTitle}</h1>
        <p className = {AssignedClasses.join(" ")}>a paragraph</p>
        <button
        className = {btnClass}
          onClick={props.clicked}>Toggle Persons</button>
          </Aux>
    );
}

export default Cockpit;