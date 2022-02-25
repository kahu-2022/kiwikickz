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
        {cart.map( item => <CartItem data={item}/>)}
        
        
      </Container>
      <Container>
        <Button>Remove</Button>
        <Button>Checkout</Button>
      </Container>
      
    </div>
  )
}

export default Cart