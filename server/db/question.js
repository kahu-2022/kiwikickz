const connection = require('./connection')
const snakecase = require('snakecase-keys')

function getQuestions(db = connection) {
    return db('question')
}

module.exports = {
    getQuestions
}