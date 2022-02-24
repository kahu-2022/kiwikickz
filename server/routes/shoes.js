const express = require('express')
const camelCase = require('camelcase-keys')

const db = require('../db/shoes')
const router = express.Router()

router.get('/', (req, res) => {
    db.getShoes()
      .then(shoeArr => {
        res.json(camelCase(shoeArr))
      })
      .catch((err) => {
        console.error("Database: " + err.message)
      })
    })

router.post('/', (req,res) => {
  //console.log('req', req)
  const product = req.body
   db.addProduct(product)
      .then((id) => {
      console.log(`Product ${id[0]} has been added.`)
      res.json(id[0])
      return null
          })
          .catch((err) => {
            console.error("Database: " + err.message)
          }) 
})

module.exports = router