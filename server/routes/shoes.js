const express = require('express')

const db = require('../db/shoes')
const router = express.Router()

router.get('/', (req, res) => {
    db.getShoes()
      .then(shoeArr => {
        res.json(shoeArr)
      })
    })

module.exports = router