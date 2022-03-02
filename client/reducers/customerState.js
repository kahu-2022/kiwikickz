import { GET_CUSTOMER_DETAILS } from "../actions/transaction";

const initialState = [];

function customerState(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMER_DETAILS:
      return action.customerDetails
    default:
      return state;
  }
}

export default customerState;