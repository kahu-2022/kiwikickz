import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Header, Item , Image , Divider, Button} from 'semantic-ui-react'
import CartItem from './CartItem'

function Cart() {
  const dispatch = useDispatch()
  const cartItem = useSelector(globalState => globalState.product)

  return (
    <div>
      <Container>
        <Divider/>
        <Header as='h2'>Items in Cart</Header>
        <Divider/>
        <CartItem data={cartItem}/>
        
      </Container>
      <Container>
        <Button>Remove</Button>
        <Button>Checkout</Button>
      </Container>
      
    </div>
  )
}

export default Cart