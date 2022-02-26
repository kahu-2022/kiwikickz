import { GET_ALL_QUESTIONS } from '../actions/questions'

function allQuestions (state = [], action) {
    switch (action.type) {
        case GET_ALL_QUESTIONS:
          return action.questionArr
        default:
            return state
    }
}

export default allQuestions