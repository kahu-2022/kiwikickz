import { ADD_SHOES } from '../actions/shoes'

function shoes (state = {}, action) {
    switch (action.type) {
        case ADD_SHOES:
          return action.shoeArr
        default:
            return state
    }
}

export default shoes