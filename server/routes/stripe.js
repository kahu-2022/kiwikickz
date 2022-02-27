const express = require('express')
const router = express.Router()
// const KEY = process.env.STRIPE_KEY

const stripe = require("stripe")('sk_test_51KWbgYFReKnnv8idi9uY4hXXZxZiqxdUKAGuYxisylI1riCQLIZGrICjFS8FhHZ7kng6Y8wuaEJXZJh1kcAuREkz00xlFmdUuv');

router.post("/", (req, res) => {
  const { cart, token } = req.body

  console.log(cart)

  return stripe.customers
    .create({
      email: token.email,
      source: token.id
    })
    .then(customer => {
      stripe.charges.create(
        {
        amount: cart[0].price * 100,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: cart.name
      })
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
});

module.exports = router;
