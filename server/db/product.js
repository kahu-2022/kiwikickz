const connection = require('./connection')

function getProducts(db = connection) {
    return db('product')
}

module.exports = {
    getProducts
}