import { SHIT_IN_CART, ITS_FUCKING_EMPTY } from "../actions/productStateState";

const initialState = false;

function isProductArrFull(state = initialState, action) {
  switch (action.type) {
    case SHIT_IN_CART:
      return true
    case ITS_FUCKING_EMPTY:
      return false
    default:
      return state;
  }
}

export default isProductArrFull;
