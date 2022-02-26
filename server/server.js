const express = require('express')
const cors = require("cors")
const path = require('path')

const shoeRoutes = require('./routes/shoes')
const stripe = require('./routes/stripe')

const server = express()
server.use(express.json());
server.use(cors());
server.use(express.json())




server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/shoes', shoeRoutes)
server.use('/api/v1/payment', stripe)


server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
