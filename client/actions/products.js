import {getAllProduct} from '../apis'

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"

export function getAllProductsAction(productArr) {
    return {
        type: GET_ALL_PRODUCTS,
        productArr
    }
}

// THUNKS

export function getAllProductsThunk() {
    return (dispatch) => {
        getAllProduct()
        .then (productArr => {
            dispatch(getAllProductsThunk(productArr))
        })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
            return null
          })

    }
}