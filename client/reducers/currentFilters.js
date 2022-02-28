import { testingFilterArr } from '../lib'
import { CHECK_FILTER } from '../actions/products'


const initialState = [{ key: "hotPick", value: 1 }];

function currentFilters(state = initialState, action) {
  switch (action.type) {
    case CHECK_FILTER:
      const results = testingFilterArr(state, action.filter)
      return results
    default:
      return state;
  }
}

export default currentFilters;
