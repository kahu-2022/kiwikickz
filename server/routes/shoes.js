const express = require('express')
const camelCase = require('camelcase-keys')

const db = require('../db/shoes')
const router = express.Router()

router.get('/', (req, res) => {
    db.getShoes()
      .then(shoeArr => {
        res.json(camelCase(shoeArr))
      })
    })

module.exports = router