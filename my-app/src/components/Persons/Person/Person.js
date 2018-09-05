import React, { PureComponent } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../container/App';

class Person extends PureComponent {
    constructor(props) {
        super(props);
        console.log("[Person.js] inside constructor", props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log("[Person.js] inside ComponentWillMount()");
    }

    componentDidMount() {
        console.log("[Person.js] in ComponentDidMount()");
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }
    render() {
        console.log("[Person.js] in render");
        return (

            <Aux>
                <AuthContext.Consumer>
                  {auth => auth ? <p>I am authenticated</p> : null}
                  </AuthContext.Consumer>
                <p onClick={this.props.click}> I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )

        /*return [
            <p key ="1" onClick={this.props.click}> I am {this.props.name} and I am {this.props.age} years old</p>,
                <p key ="2">{this.props.children}</p>,
                <input key= "3" type="text" onChange={this.props.changed} value={this.props.name} />
        ]*/

    }
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func

}


export default withClass(Person, classes.Person);