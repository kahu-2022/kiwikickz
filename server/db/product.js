const connection = require('./connection')
const snakecase = require('snakecase-keys')

function getProducts(db = connection) {
    return db('product')
}

function addProduct (newProduct, db = connection) {
    return db('product')
    .insert(snakecase(newProduct))
}

function getQuestions(db = connection) {
    return db('question')
}

module.exports = {
    getProducts, 
    addProduct,
    getQuestions
}