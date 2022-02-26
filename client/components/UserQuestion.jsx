import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Image, Container, Segment } from 'semantic-ui-react'
import ImageCarousel from "./ImageCarousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { getAllQuestionsThunk } from '../actions/questions'


function UserQuestion () {

  const dispatch = useDispatch()

  return (
    <>
      <h2>Questions and Answers</h2>
      <button onClick={dispatch(getAllQuestionsThunk())}>get all questions</button>
      <br/>
      <br/>
    </>
  )
}

export default UserQuestion
