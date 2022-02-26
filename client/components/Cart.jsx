import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Header, Item , Image , Divider, Button} from 'semantic-ui-react'
import cart from '../reducers/cart'
import CartItem from './CartItem'

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(globalState => globalState.cart)

  return (
    <div>
      <Container>
        <Divider/>
        <Header as='h2'>Items in Cart</Header>
        <Divider/>
        {cart ? cart.map( (item , i) => <CartItem data={item} key={item.name + i}/>) : <p>You have no items in your cart.</p>}
        
        
      </Container>
      
      <Container>
        <Button>Checkout</Button>
      </Container>
      
    </div>
  )
}

export default Cart