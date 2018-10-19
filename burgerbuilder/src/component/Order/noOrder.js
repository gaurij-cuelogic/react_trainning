import React,{ Component} from 'react';
import Button from '../UI/Button/Button';
import {withRouter} from 'react-router-dom';



class OrderNull extends Component{

    buildBurgerHandler = () => {
        this.props.history.push('/');
    }

render(){
    
    return (
        <div style={{textAlign:'center'}}>
            <p> You have not ordered anything yet!</p>
            <p>To order, click the button below</p>
            <Button 
               clicked= {this.buildBurgerHandler}
            btnType="Success">Build a burger</Button>
        </div>
        );
}
}

export default withRouter(OrderNull);