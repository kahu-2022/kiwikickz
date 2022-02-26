import {getAllProduct , addProduct} from '../apis'

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"

export function getAllProductsAction(productArr) {
    return {
        type: GET_ALL_PRODUCTS,
        productArr
    }
}

export function addToCart(product) {
    return {
        type: 'ADD_ITEM',
        product: product
    }
}

// THUNKS

export function getAllProductsThunk() {
    return (dispatch) => {
        getAllProduct()
        .then (productArr => {
            dispatch(getAllProductsAction(productArr))
        })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
            return null
          })

    }
}

export function addProductThunk(product) {
    return (dispatch) => {
        addProduct(product)
        .then ((id) => {
            dispatch(getAllProductsThunk())
            return id
        })
        .then ((id) => {
            console.log("TESTING to see if the second .then WORKS ", id + 1000)
            return id + 1000
        })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
            return null
          })

    }
}