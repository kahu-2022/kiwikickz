const express = require('express')
const cors = require("cors")
const path = require('path')
const bodyParser = require('body-parser')

const productRoutes = require('./routes/product')
const questionRoutes = require('./routes/question')
const stripe = require('./routes/stripe')

const server = express()

server.use(cors())  
server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/product', productRoutes)
server.use('/api/v1/question', questionRoutes)
server.use('/api/v1/payment', stripe)


server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
