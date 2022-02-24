import React from 'react'
import { useSelector } from 'react-redux'
import CartCheckout from './CartCheckout'

// Example Object
// auth_status: true
// brand: "Nike"
// color: "White"
// condition: "New"
// details: "Jordan Brand connected with Parisian fashion house."
// hot_pick: true
// id: 1
// image1: "/shoeimges/dior/dior1"
// image2: "/shoeimges/dior/dior1"
// image3: "/shoeimges/dior/dior1"
// image4: "/shoeimges/dior/dior1"
// make: "Jordan 1"
// model: "Dior High"
// name: "Jordan 1 Retro High"
// price: 8000
// receipt: ""
// seller_id: 1
// size: 9
// status: "available"
// year: 2020



function Cart() {
  const cartItem = useSelector(globalState => globalState.shoe)

  console.log(cartItem)

  return (
    <div>
      <h2>Items in Cart</h2>
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
      {/* <CartCheckout /> */}
    </div>
  )
}

export default Cart