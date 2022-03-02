import { GET_ALL_QUESTIONS, ADD_QUESTION, UPDATE_QUESTION } from '../actions/questions'

function allQuestions (state = [], action) {

    switch (action.type) {
        case GET_ALL_QUESTIONS:
          return action.questionArr
        case ADD_QUESTION:
          return [ ...state, action.questionInclID]
        case UPDATE_QUESTION:
          return state.map( question => question.id === action.updatedQuestion.id ? action.updatedQuestion : question)
        default:
            return state
    }
}
export default allQuestions