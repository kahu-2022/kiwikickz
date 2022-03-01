const connection = require('./connection')
const snakecase = require('snakecase-keys')

function getProducts(db = connection) {
    return db('product')
    //where status = 'available'
}

function addProduct (newProduct, db = connection) {
    return db('product')
    .insert(snakecase(newProduct))
}

function getQuestions(db = connection) {
    return db('question')
}

function updateProductStatus (ids, db = connection) {   
    return db ('product')
    .whereIn('id', ids) 
    .update({ 'status' : 'sold'}) 
}

module.exports = {
    getProducts, 
    addProduct,
    getQuestions,
    updateProductStatus
}