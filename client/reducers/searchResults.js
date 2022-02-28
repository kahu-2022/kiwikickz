import { GET_SEARCH_RESULTS } from '../actions/products'

function searchResults (state = [], action) {
    switch (action.type) {
        case GET_SEARCH_RESULTS:
          return action.searchResultsArr
        default:
            return state
    }
}

export default searchResults