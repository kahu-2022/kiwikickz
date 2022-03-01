import {getAllTransaction, addTransaction} from '../apis'



export function getAllTransactionsAction(transactionArr) {
    return {
        type: "GET_ALL_TRANSACTIONS",
        transactionArr
    }
}


export function getAllTransactionThunk() {
    return (dispatch) => {
        getAllTransaction()
        .then (transactionArr => {
            dispatch(getAllTransactionsAction(transactionArr))
        })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
            return null
          })

    }
}


export function addTransactionThunk(transaction) {
    return (dispatch) => {
        return addTransaction(transaction)
        .then ((id) => {
            dispatch(getAllTransactionThunk())
            return id
        })
        .then ((id) => {
            console.log("returning id of add action thunk", id)
            return id
        })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
          })
    }
}