import { getAllTransaction, addTransaction } from '../apis'



export function getAllTransactionsAction(transactionArr) {
    return {
        type: "GET_ALL_TRANSACTIONS",
        transactionArr
    }
}


export function getAllTransactionThunk() {
    return (dispatch) => {
        getAllTransaction()
            .then(transactionArr => {
                dispatch(getAllTransactionsAction(transactionArr))
            })
            .catch(err => {
                const errMessage = err.response?.text || err.message
                console.log(errMessage)
                return null
            })
    }
}

export function addTransactionThunk(transaction, token) {
    return (dispatch) => {
        return addTransaction(transaction)
            .then((id) => {
                dispatch(getAllTransactionThunk())
                dispatch(getCustomerDetails(token))
                return id
            })
            .catch(err => {
                const errMessage = err.response?.text || err.message
                console.log(errMessage)
            })
    }
}

export const GET_CUSTOMER_DETAILS = "GET_CUSTOMER_DETAILS"

function getCustomerDetails(customerDetails) {
    return {
        type: GET_CUSTOMER_DETAILS,
        customerDetails
    }
}
