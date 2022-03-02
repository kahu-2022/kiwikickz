import { testingFilterArr } from '../lib'
import { CHECK_FILTER } from '../actions/products'

const initialState = [];

function currentFilters(state = initialState, action) {
  switch (action.type) {
    case CHECK_FILTER:
      return testingFilterArr(state, action.filter)
    default:
      return state;
  }
}

export default currentFilters;
