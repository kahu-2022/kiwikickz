import { useSelector } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'
import StripeCheckout from 'react-stripe-checkout'
import React from 'react'
import { Container, Header, Divider, Button} from 'semantic-ui-react'
import cart from '../reducers/cart'
import CartItem from './CartItem'

const KEY = 'pk_test_51KWbgYFReKnnv8idD5AniOTrgkHf4So0DdrlwUX8DmgsYcZ1MdH9ldHY6NX609yIEnBgqskqcmqnFvGLyl0C3KoF00dLM80Ga9'

function Cart() {
  const cartItem = useSelector(globalState => globalState.shoe)


  const makePayment = (token) => {
    const body = {
      token, 
      cartItem
    }

    const headers = {
      "Content-type": "application/json"
    }
    return fetch(`http://localhost:3000/api/v1/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      const { status } = response;
      console.log("status", status)
    })
    .catch(err => console.log(err))
  }

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
      {/* <CartCheckout /> */}
      <StripeCheckout
        name="Kiwi Kickz"
        image="/kicksimg.png"
        billingAddress
        shippingAddress
        description={`Your total is $${cartItem.price}`}
        amount={cartItem.price * 100}
        token={makePayment}
        stripeKey={KEY}
      >
        <button>CHECKOUT NOW</button>
      </StripeCheckout>
    </div>
  )
}


export default Cart