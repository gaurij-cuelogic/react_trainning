import React, { Component } from 'react';
import Input from '../../component/UI/Input/Input';
import Button from '../../component/UI/Button/Button';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../component/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';
import { updateObject, checkValidity } from '../../shared/utility';
import passwordValidator from 'password-validator';


class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                valid: false,
                touched: false
            }
        },
        isSignup: true,
        passwordChecker : false
        // errorMessage: null
    }

    componentDidMount() {
        if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }


    }



    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({ controls: updatedControls });

    }

    submitHandler = (event) => {

        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
       this.setState({
           passwordChecker:true
       })
        // let errorMessage = null;

        // const schema = new passwordValidator();
        // schema
        //     .is().min(8)                              // Minimum length 8
        //     .is().max(100)                                  // Maximum length 100
        //     .has().uppercase()                              // Must have uppercase letters
        //     .has().lowercase()                              // Must have lowercase letters
        //     .has().digits()                                 // Must have digits
        //     .has().not().spaces()                           // Should not have spaces

        // if (!schema.validate(this.state.controls.password.value)) {
        //     // alert('in customized error')
        //     let errorMessage = <p> Password should be of minimum 8 characters, should contain atleast 1 uppercase letter, 1 lowercase letter,a digit and should not have spaces</p>
        //     this.setState({
        //         errorMessage: errorMessage
        //     })
        // }
        // console.log(this.props.error);

        // if (this.props.error !== null) {
        //     console.log("error message==========>", this.props.error.message);
        //     let errorMessage = `${this.props.error.message}`;
        //     this.setState({
        //         errorMessage: errorMessage
        //     })
        // }


    }

    switchAuthModeHandler = () => {
        localStorage.setItem('isSignUp', this.state.isSignup);
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup };

        })
        localStorage.setItem('isSignUp', this.state.isSignup);
    }




    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }
        let errorMessage = null
        if (this.props.error !== null) {
        console.log("=======>",this.props.error.message);
            errorMessage = `${this.props.error.message}`;
        }
   

        const schema = new passwordValidator();
        schema
            .is().min(8)                              // Minimum length 8
            .is().max(100)                                  // Maximum length 100
            .has().uppercase()                              // Must have uppercase letters
            .has().lowercase()                              // Must have lowercase letters
            .has().digits()                                 // Must have digits
            .has().not().spaces()                           // Should not have spaces


        if (this.state.isSignup && this.state.passwordChecker ) {
            if (!schema.validate(this.state.controls.password.value)) {
                errorMessage = <p> Password should be of minimum 8 characters, should contain atleast 1 uppercase letter, 1 lowercase letter,a digit and should not have spaces</p>
            }
        }
      

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
            />
        ));

        if (this.props.loading) {
            form = <Spinner />
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        // let word = null;

        // if (localStorage.getItem('isSignUp') === 'true') {
        //     word = 'SIGNUP'
        // } else {
        //     word = 'SIGNIN'
        // }



        return (

            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignup ? `SIGNIN` : `SIGNUP`} </Button>

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Auth);