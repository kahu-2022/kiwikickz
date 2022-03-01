import { useSelector, useDispatch } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import React, { useState } from 'react'
import { Container, Header, Divider, Button } from 'semantic-ui-react'
import cart from '../reducers/cart'
import CartItem from './CartItem'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addTransactionThunk } from '../actions/transaction'
import { getAllProductsThunk, updateStatus} from '../actions/products'


const KEY = 'pk_test_51KWbgYFReKnnv8idD5AniOTrgkHf4So0DdrlwUX8DmgsYcZ1MdH9ldHY6NX609yIEnBgqskqcmqnFvGLyl0C3KoF00dLM80Ga9'

function Cart() {
  const cart = useSelector(globalState => globalState.cart)
  const amount = useSelector(globalState => globalState.cartTotal)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cartIds = cart.map(element => {
    return element.id
  })

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

    const stringifyCart = JSON.stringify(cart)

    var strWithOutQuotes = stringifyCart.replace(/['"]+/g, '')
    const stringWithStartQuotes = `"${strWithOutQuotes}"`

    const headers = {
      "Content-type": "application/json"
    }
    return fetch(`http://localhost:3000/api/v1/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      if (response.status == 200) {
        const transactionData = {
          products_purchased: stringWithStartQuotes,
          transaction_amount: cartItems.price,
          buyer_email: token.email
        }
        dispatch(addTransactionThunk(transactionData))
          .then((id) => { 
            navigate(`/success`)
          })
          .then(() => {
            const productsToUpdate = { 
              "update": JSON.stringify(cartIds)
            }
            dispatch(updateStatus(productsToUpdate)).then((updtCount) => {
              console.log(updtCount)})
          })
      }
    })
      .catch(err => console.log(err))
  }




  return (
    <div>
      <Container>
        <Header as='h2'>Items in Cart</Header>
        {cart.length > 0 ? cart.map((item, i) => <CartItem data={item} key={item.name + i} />) : <div className='empty-cart'><Header as='h3' textAlign='center'>You have no items in your cart.</Header></div>}

      </Container>
      <Container>
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
        <Link to='/'><Button>Continue Shopping</Button></Link>

      </Container>

    </div>
  )
}


export default Cart

