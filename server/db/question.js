const connection = require('./connection')
const snakecase = require('snakecase-keys')

function getQuestions(db = connection) {
    return db('question')
}

function addQuestion(obj, db = connection) {
    return db('question')
    .insert(obj)
}

function updateQuestion(obj, db = connection) {
    console.log(obj)
    const questionId = Number(obj.id)
    return db('question')
    .update(obj)
    .where('id', questionId)
}

module.exports = {
    getQuestions,
    addQuestion,
    updateQuestion
}