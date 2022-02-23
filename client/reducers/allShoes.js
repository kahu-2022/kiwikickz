import { GET_ALL_SHOES } from '../actions/shoes'

function allShoes (state = {}, action) {
    switch (action.type) {
        case GET_ALL_SHOES:
          return action.shoeArr
        default:
            return state
    }
}

export default allShoes