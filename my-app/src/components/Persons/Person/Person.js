import React, { PureComponent } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends PureComponent {
    constructor(props){
        super(props);
        console.log("[Person.js] inside constructor",props);
       
      }
    
      componentWillMount(){
       console.log("[Person.js] inside ComponentWillMount()");
      }
    
      componentDidMount(){
        console.log("[Person.js] in ComponentDidMount()");
      }
    
    render() {
        console.log("[Person.js] in render");
        return (
            
           <Aux>
                <p onClick={this.props.click}> I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                </Aux>
        )

        /*return [
            <p key ="1" onClick={this.props.click}> I am {this.props.name} and I am {this.props.age} years old</p>,
                <p key ="2">{this.props.children}</p>,
                <input key= "3" type="text" onChange={this.props.changed} value={this.props.name} />
        ]*/

    }
}


export default withClass(Person,classes.Person);