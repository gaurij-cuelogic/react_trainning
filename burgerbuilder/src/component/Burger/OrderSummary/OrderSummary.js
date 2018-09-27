import React,{ Component} from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return <li key ={igKey}>
          <span
            style={{ textTransform: 'capitalize' }}>
            {igKey}: {this.props.ingredients[igKey]}</span></li>
      })

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Burger with following ingredients</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price :{this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType ="Success" clicked = {this.props.purchaseContinued}>CONTINUE</Button>
        <Button btnType ="Danger" clicked = {this.props.purchaseCancelled}>CANCEL</Button>
      </Aux>)
  }
}
export default OrderSummary
