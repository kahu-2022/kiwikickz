const express = require('express')
const camelCase = require('camelcase-keys')

const db = require('../db/product')
const router = express.Router()

router.get('/', (req, res) => {
    db.getProducts()
      .then(productArr => {
        res.json(camelCase(productArr))
      })
    })

module.exports = router