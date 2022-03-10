import {getAllQuestion, addQuestion, updateQuestion, deleteQuestion} from '../apis'

export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const UPDATE_QUESTION = "UPDATE_QUESTION"

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

export function updateQuestionAction(updatedQuestion){
    return {
        type: UPDATE_QUESTION,
        updatedQuestion
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

export function updateQuestionThunk(questionToUpdate) {
    return (dispatch) => {
        updateQuestion(questionToUpdate)
        .then((numberOfUpdateQuestion) => {
            dispatch(updateQuestionAction(questionToUpdate))
        })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
            return null
            })
    }
}

export function deleteQuestionThunk(id) {
    return (dispatch) => {
        return deleteQuestion(id)
        .then((string) => {
            dispatch(getAllQuestionsThunk())
            return string
        })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
            return null
            })
    }
}
