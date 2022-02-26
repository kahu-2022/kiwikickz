import {getAllQuestion} from '../apis'

export const GET_ALL_QUESTIONS = "GET_ALL_QUESTIONS"

export function getAllQuestionsAction(questionArr) {
    return {
        type: GET_ALL_QUESTIONS,
        questionArr
    }
}

// export function addToCart(product) {
//     return {
//         type: 'ADD_ITEM',
//         product: product
//     }
// }

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

// export function addProductThunk(product) {
//     return (dispatch) => {
//         addProduct(product)
//         .then ((id) => {
//             dispatch(getAllShoesThunk())
//             return id
//         })
//         .then ((id) => {
//             console.log("TESTING to see if the second .then WORKS ", id + 1000)
//             return id + 1000
//         })
//         .catch ( err => {
//             const errMessage = err.response?.text || err.message
//             console.log(errMessage)
//             return null
//           })

//     }
// }