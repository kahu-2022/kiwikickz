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

  module.exports = router

 