const express = require('express')
const camelCase = require('camelcase-keys')

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
  const questionToUpdate = req.body
  console.log('hello route', questionToUpdate)
  db.updateQuestion(questionToUpdate)
  .then(numberOfUpdatedQuestion => {
    res.json(numberOfUpdatedQuestion)
    return null
  })
  .catch((err) => {
    console.error("Database: " + err.message)
    })
})

  module.exports = router

 