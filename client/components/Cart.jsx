import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'
import StripeCheckout from 'react-stripe-checkout'

const KEY = `process.env.REACT_APP_STRIPE`



function Cart() {
  const cartItem = useSelector(globalState => globalState.shoe)
  const [stripeToken, setStripeToken] = useState(null)


  const onToken = (token) => {
    setStripeToken(token)

  }

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await userRequest.post("/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: 500,
  //       });
  //       history.push("/success", {
  //         stripeData: res.data,
  //         products: cartItem, });
  //     } catch {}
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, cartItem.total, history]);

  return (
    <div>
      <Container textAlign='center'>
        <Header as='h2'>Items in Cart</Header>
        <p>
          Details: {cartItem.name}
        </p>
        <p>
          Details: {cartItem.details}
        </p>
        <p>
          Make: {cartItem.make}
        </p>
        <p>
          Model: {cartItem.model}
        </p>
        <p>
          Name: {cartItem.name}
        </p>
        <p>
          Condition: {cartItem.condition}
        </p>
        <p>
          Year made: {cartItem.year}
        </p>
        <p>
          Shoe Size {cartItem.size}
        </p>
        <p>
          Price:  {cartItem.price}
        </p>
      </Container>
      {/* <CartCheckout /> */}
      <StripeCheckout
        name="Kiwi Kickz"
        image="https://avatars.githubusercontent.com/u/1486366?v=4"
        billingAddress
        shippingAddress
        description={`Your total is $${cartItem.price}`}
        amount={cartItem.price * 100}
        token={onToken}
        stripeKey={KEY}
      >
        <button>CHECKOUT NOW</button>
      </StripeCheckout>
    </div>
  )
}


export default Cart