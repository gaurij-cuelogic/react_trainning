import React, { PureComponent} from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {
    constructor(props){
        super(props);
        console.log("[Persons.js] inside constructor",props);
        this.lastPersonRef = React.createRef() 
      }
    
      componentWillMount(){
       console.log("[Persons.js] inside ComponentWillMount()");
      }
    
      componentDidMount(){
        console.log("[Persons.js] in ComponentDidMount()");
        //this.lastPersonRef.current.focus();
      }
    
      componentWillReceiveProps(nextProps){
          console.log("[UPDATE Persons.js] in componentWillReceiveProps",nextProps);
      }
    
    /*  shouldComponentUpdate(nextProps , nextState){
        console.log("[UPDATE Persons.js] in shouldComponentUpdate()",nextProps,nextState);
        return nextProps.persons!==this.props.persons || 
        nextProps.changed!==this.props.changed ||
        nextProps.clicked!== this.props.clicked;
   // return true;  
    }*/

      componentWillUpdate(nextProps, nextState){
          console.log("[UPDATE Persons.js] in componentWillUpdate",nextProps,nextState);
      }

      componentDidUpdate(){
        console.log("[UPDATE Persons.js] in componentDidUpdate");
      }
  render(){
      console.log("[Persons.js] render")
      return this.props.persons.map((person, index) => {
        return <Person
          click={() => this.props.clicked(index)}
          name = {person.name}
          position ={index}
          forwardedRef = {this.lastPersonRef}
          age = {person.age}
          key = {person.id}
          changed = {(event) => this.props.changed(event, person.id)} />
      })
  }

}

export default Persons;