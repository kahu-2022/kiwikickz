import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllQuestionsThunk, addQuestionThunk} from '../actions/questions'
import { Form , Button , Container, TextArea, Header } from 'semantic-ui-react'


function UserQuestion () {
  const {id} = useParams()
  const dispatch = useDispatch()
  const allQuestions = useSelector(globalState => globalState.allQuestions)
  const questions = allQuestions.filter((question) => question.productId == Number(id) && question.status == 'answered' )
  
  const defaultState = 
    { product_id: id,
      question: "",
      status: "unanswered"
      }

  const [question, setQuestion] = useState(defaultState)
  const [asked , setAsked] = useState(false)
  
  const handleInput = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
      } else {
        setQuestion({
          product_id: id,
          question: e.target.value,
          status: 'unanswered',
          answer: ""
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAsked(true)
    dispatch(addQuestionThunk(question))
    setQuestion(defaultState)
  }
    
  useEffect(() => {
    dispatch(getAllQuestionsThunk())
  }, [])
  
  
  return (
    <>
      <h2>Questions and Answers</h2>
      
       {questions.map(ele =>
       <>
       <Header as='h5' key = {ele.id}> Q :{ele.question}</Header>
       <p>A : {ele.answer}</p>
       </>
       )}
       
      <Container className='question-box'>
      <Form type="submit" onSubmit={handleSubmit}>
        <Form.Field>
        <TextArea
          type='textarea'
          id='question'
          value={question.question}
          placeholder="enter your question"
          onChange={e => handleInput(e)}
        />
        </Form.Field>
        <Button onClick={e => handleSubmit}>submit</Button>
      </Form>
      { asked ? <p className='qsubmit'>Thanks for your question. Admins will respond at their neareast convenience</p> : null }
      </Container>

    </>
  )
}

export default UserQuestion
