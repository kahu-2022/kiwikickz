import { ADD_SHOES } from '../actions/meetings'

function shoes (state = {}, action) {
    switch (action.type) {
        case ADD_SHOES:
          return action.shoes
        default:
            return state
    }
}

export default shoes