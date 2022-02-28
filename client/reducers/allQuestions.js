import { GET_ALL_QUESTIONS, ADD_QUESTION } from '../actions/questions'

function allQuestions (state = [], action) {
  // console.log("Hello Reducer here")

    switch (action.type) {
        case GET_ALL_QUESTIONS:
          return action.questionArr
        case ADD_QUESTION:
          return [ ...state, action.questionInclID]
        default:
            return state
    }
}

export default allQuestions