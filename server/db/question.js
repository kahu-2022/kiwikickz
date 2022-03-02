const connection = require('./connection')
const snakecase = require('snakecase-keys')

function getQuestions(db = connection) {
    return db('question')
}

function addQuestion(obj, db = connection) {
    return db('question')
    .insert(obj , 'id')
}

function updateQuestion(obj, db = connection) {
    const questionId = Number(obj.id)
    return db('question')
    .update(obj)
    .where('id', questionId)
}

function deleteQuestion(id, db = connection) {
    const questionId = Number(id)
    return db('question')
    .where({ id: questionId })
    .del()
}

module.exports = {
    getQuestions,
    addQuestion,
    updateQuestion,
    deleteQuestion

}