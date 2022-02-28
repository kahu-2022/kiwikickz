const connection = require('./connection')
const snakecase = require('snakecase-keys')

function getQuestions(db = connection) {
    return db('question')
}

function addQuestion(obj, db = connection) {
    return db('question')
    .insert(obj)
}

module.exports = {
    getQuestions,
    addQuestion,
}