import {getAllQuestion, addQuestion} from '../apis'

export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"

//ACTIONS
export function getAllQuestionsAction(questionArr) {
    return {
        type: GET_ALL_QUESTIONS,
        questionArr
    }
}


export function addQuestionAction(questionInclID) {
    return {
        type: ADD_QUESTION,
        questionInclID
    }
}

// THUNKS

export function getAllQuestionsThunk() {
    return (dispatch) => {
        getAllQuestion()
        .then (questionArr => {
            dispatch(getAllQuestionsAction(questionArr))
        })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
            return null
          })

    }
}

export function addQuestionThunk(question) {
    // console.log("thunk here", question)
    return (dispatch) => {
        addQuestion(question)
            .then((idOfAddedQuestion) => {
                const questionInclID = {...question, id: idOfAddedQuestion[0]}
                // console.log("Hello THUNK here", questionInclID)
                dispatch(addQuestionAction(questionInclID))
            })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
            return null
            })
    }
}