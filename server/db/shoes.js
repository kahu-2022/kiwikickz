const connection = require('./connection')
const snakecase = require('snakecase-keys')

function getShoes(db = connection) {
    return db('product')
}

function addProduct (newProduct, db = connection) {
    return db('product')
    .insert(snakecase(newProduct))
}

module.exports = {
    getShoes,
    addProduct
}