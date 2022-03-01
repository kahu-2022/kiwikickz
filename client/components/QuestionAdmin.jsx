import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { getAllQuestionsThunk, addQuestionThunk, updateQuestionThunk} from '../actions/questions'
import { Button, Container, Form, Dropdown , Grid, Divider} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function QuestionAdmin() {
  
  const dispatch = useDispatch()
  const allQuestions = useSelector(globalState => globalState.allQuestions)
  
  const unansweredQuestions = allQuestions.filter((question) => question.status == 'unanswered' )

  const answeredQuestions = allQuestions.filter((question) => question.status == 'answered' )

  const defaultState= {
    answer: "",
  }

  useEffect(() => {
    dispatch(getAllQuestionsThunk())
  }, [])

  const [answer, setAnswer] = useState(defaultState)

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
      } else {
        setAnswer({
          answer: e.target.value,
          status: 'answered'
        })
      }
  }

  const handleSubmit = (id, question, productId, createdAt, e) => {
    e.preventDefault()
    const newQuestion = {
      ...answer,
      answer: answer.answer,
      id: id, 
      question: question,
      productId: productId, 
      createdAt: createdAt 
    }
    dispatch(updateQuestionThunk(newQuestion))
    setAnswer(defaultState)
  }

  return (
    <>
    <Container>
      <Link to="/admin">go back to admin</Link>
    </Container>
    <Container>
      <h2>Unanswered Questions</h2>
      <ul>
        {unansweredQuestions.map(ele =>
        <>
        <li key = {ele.id}>ProductId: {ele.productId}<br />Date: {ele.createdAt}<br />{ele.question}
        <form type="submit" onSubmit={(e) => handleSubmit(ele.id, ele.question, ele.productId, ele.createdAt, e)}>
          <input
            type='textarea'
            id='answer'
            value={ele.answer.answer}
            placeholder="enter your answer"
            onChange={(e) => ( handleInput(e))}
          />
          <button onClick={e => handleSubmit}>submit</button>
        </form>
        </li>
        </>
        )}
        </ul>
        
      <h2>Answered Questions</h2>
      <ul>
        {answeredQuestions.map(ele =>
        <>
          <li key = {ele.id}>ProductId: {ele.productId}<br />Date: {ele.createdAt}
          <br />{ele.question} <br /> {ele.answer}</li>
        </>
        )}
      </ul>
    </Container>
    </>
  )
}
export default QuestionAdmin