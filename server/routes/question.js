const express = require('express')
const camelCase = require('camelcase-keys')
const snakeCase = require('snakecase-keys')

const db = require('../db/question')
const router = express.Router()

router.get('/', (req, res) => {
  db.getQuestions()
    .then(questionsArr => {
      res.json(camelCase(questionsArr))
    })
    .catch((err) => {
      console.error("Database: " + err.message)
    })
  })

router.post('/', (req, res) => {
  const questionToAdd = req.body
  db.addQuestion(questionToAdd)
    .then(idOfaddedQuestion => {
      res.json(idOfaddedQuestion)
      return null
    })
      .catch((err) => {
      console.error("Database: " + err.message)
      })
})

router.patch('/', (req, res) => {
  const questionToUpdate = snakeCase(req.body)
  db.updateQuestion(questionToUpdate)
  .then(numberOfUpdatedQuestion => {
    res.json(numberOfUpdatedQuestion)
    return null
  })
  .catch((err) => {
    console.error("Database: " + err.message)
    })
})

router.delete('/', (req, res) => {
  const id = req.body.id
  console.log(req.body.id)
  db.deleteQuestion(id)
  .then((numberOfDeleteItem) => {
   res.send('Question deleted successfully.') 
   return null
  })
  .catch((err) => {
    console.error("Database: " + err.message)
    })
})

  module.exports = router

 