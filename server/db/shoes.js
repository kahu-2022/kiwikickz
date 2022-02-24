const connection = require('./connection')

function getShoes(db = connection) {
    return db('product')
}

module.exports = {
    getShoes
}