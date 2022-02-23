const connection = require('./connection')

function getShoes(db = connection) {
    return db('user')
}

module.exports = {
    getShoes
}