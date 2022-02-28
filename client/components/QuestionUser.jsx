import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllQuestionsThunk, addQuestionThunk} from '../actions/questions'


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
  
  const handleInput = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
      } else {
        setQuestion({
          product_id: id,
          question: e.target.value,
          status: 'unanswered'
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addQuestionThunk(question))
    setQuestion(defaultState)
  }
    
  useEffect(() => {
    dispatch(getAllQuestionsThunk())
  }, [])
  
  
  return (
    <>
      <h2>Questions and Answers</h2>
      <ul>
       {questions.map(ele =>
       <>
       <li key = {ele.id}>{ele.question}</li>
       <p>{ele.answer}</p>
       </>
       )}
      </ul>
      <form type="submit" onSubmit={handleSubmit}>
        <input
          type='text'
          id='question'
          value={question.question}
          placeholder="enter your question"
          onChange={e => handleInput(e)}
        />
        <button onClick={e => handleSubmit}>submit</button>
      </form>

      <br/>
      <br/>
    </>
  )
}

export default UserQuestion
