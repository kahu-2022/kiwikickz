import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Image, Container, Segment } from 'semantic-ui-react'
import ImageCarousel from "./ImageCarousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { getAllQuestionsThunk } from '../actions/questions'


function UserQuestion () {
  const {id} = useParams()
  const dispatch = useDispatch()
  const allQuestions = useSelector(globalState => globalState.allQuestions)
  const questions = allQuestions.filter((question) => question.productId == Number(id) && question.status == 'answered' )
  useEffect(() => {
    dispatch(getAllQuestionsThunk())
  }, [])
  

  return (
    <>
      <h2>Questions and Answers</h2>
      <ul>
       {questions.map(ele =><li key = {ele.id}>{ele.question}</li>   )}
      </ul>
      <br/>
      <br/>
    </>
  )
}

export default UserQuestion
