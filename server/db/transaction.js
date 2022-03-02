const connection = require('./connection')
const snakecase = require('snakecase-keys')

function getTransaction(db = connection) {
    return db('transaction')
}

function addTransaction (newTransaction, db = connection) {
    return db('transaction')
    .insert(snakecase(newTransaction), 'id')
}

module.exports = {
    getTransaction,
    addTransaction 
}