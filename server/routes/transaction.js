const express = require('express')
const camelCase = require('camelcase-keys')

const db = require('../db/transaction')
const router = express.Router()

router.get('/', (req, res) => {
  db.getTransaction()
    .then(productArr => {
      res.json(camelCase(productArr))
    })
    .catch((err) => {
      console.error("Database: " + err.message)
    })
})


router.post('/', (req, res) => {
  //console.log('req', req)
  const transaction = req.body
  console.log("req body", transaction)
  db.addTransaction(transaction)
    .then((id) => {
      console.log(`Transaction is ${id[0]}`)
      res.json(id[0])
      return id
    })
    .catch((err) => {
      console.error("Database: " + err.message)
    })
})

module.exports = router