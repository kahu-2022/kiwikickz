function allTransactions (state = [], action) {
    switch (action.type) {
        case "GET_ALL_TRANSACTIONS":
          return action.transactionArr
        default:
            return state
    }
}

export default allTransactions