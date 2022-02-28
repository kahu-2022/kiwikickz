import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import React, { useState } from 'react'
import { Container, Header, Divider, Button } from 'semantic-ui-react'
import cart from '../reducers/cart'
import CartItem from './CartItem'
import Success from './Success'
import { Link } from 'react-router-dom'

const KEY = 'pk_test_51KWbgYFReKnnv8idD5AniOTrgkHf4So0DdrlwUX8DmgsYcZ1MdH9ldHY6NX609yIEnBgqskqcmqnFvGLyl0C3KoF00dLM80Ga9'

function Cart() {
  const cart = useSelector(globalState => globalState.cart)
  const amount = useSelector(globalState => globalState.cartTotal)
  const [visible, setVisible] = useState(false)

  const makePayment = (token) => {
    // currently only sending the individual name 'kiwi kickz' through as item desc displayed on site.
    const cartItems = {
      price: amount,
      name: "KiwiKickz"
    }

    const body = {
      token,
      cartItems
    }

    const headers = {
      "Content-type": "application/json"
    }
    return fetch(`http://localhost:3000/api/v1/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("response - status code received from stripe",response.status)
      if (response.status == 200){
        setVisible(true)
      }
    })
      .catch(err => console.log(err))
  }


  return (
    <div>{visible ? <Success /> :
      <Container>
        <Header as='h2'>Items in Cart</Header>
        <Divider />
        {cart ? cart.map((item, i) => <CartItem data={item} key={item.name + i} />) : <p>You have no items in your cart.</p>}
        <StripeCheckout
          name="Kiwi Kickz"
          image="/kicksimg.png"
          billingAddress
          shippingAddress
          description={`Your total is $${amount}`}
          amount={amount * 100}
          token={makePayment}
          stripeKey={KEY}
        >
          <Button>Checkout</Button>
        </StripeCheckout>
      </Container> 
      }

    </div>
  )
}


export default Cart