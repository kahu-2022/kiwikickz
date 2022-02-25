import { GET_ALL_PRODUCTS } from '../actions/products'

function allProducts (state = [], action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
          return action.productArr
        default:
            return state
    }
}

export default allProducts