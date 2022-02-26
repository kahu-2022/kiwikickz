import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container, Header } from 'semantic-ui-react'
import StripeCheckout from 'react-stripe-checkout'

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
    console.log("Hello?")
    return fetch(`http://localhost:3000/api/v1/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("response", response)
      const { status } = response;
      console.log("status", status)
    })
    .catch(err => console.log(err))
  }


  console.log({ makePayment })

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
        token={makePayment}
        stripeKey={KEY}
      >
        <button>CHECKOUT NOW</button>
      </StripeCheckout>
    </div>
  )
}


export default Cart