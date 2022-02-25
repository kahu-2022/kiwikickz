const connection = require('./connection')
const snakecase = require('snakecase-keys')

function getProducts(db = connection) {
    return db('product')
}

function addProduct (newProduct, db = connection) {
    return db('product')
    .insert(snakecase(newProduct))
}

module.exports = {
    getProducts, 
    addProduct
}