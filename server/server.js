const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const productRoutes = require('./routes/product')

const server = express()

server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/product', productRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
