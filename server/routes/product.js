const express = require('express')
const camelCase = require('camelcase-keys')

const db = require('../db/product')
const router = express.Router()

router.get('/', (req, res) => {
    db.getProducts()
      .then(productArr => {
        res.json(camelCase(productArr))
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

router.patch('/', (req,res) => {
  //console.log('req', req)
  const productIds = JSON.parse(req.body.update)
  console.log(productIds)
   db.updateProductStatus(productIds)
      .then((id) => {
      console.log(`Product(s) ${id} have been updated.`)
      res.json(id)
      return null
      })
      .catch((err) => {
      console.error("Database: " + err.message)
      }) 
})



module.exports = router