import {getAllProduct , addProduct, getSearchResults} from '../apis'

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS"

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

export function removeFromCart(product) {
    return {
        type: 'REMOVE_ITEM',
        product: product
    }
}

export function getCartTotal(value){
    return {
        type: 'ADD_CART_AMOUNT',
        addTotal: value
    }
}

export function getSearchResultsAction (searchResults) {
    return {
        type: GET_SEARCH_RESULTS,
        searchResultsArr: searchResults
    }
}

// THUNKS

export function getSearchResultsThunk (searchText) {
    return (dispatch) => {
        return getSearchResults({searchText: searchText})
        .then (resultsArr => {
            dispatch(getSearchResultsAction(resultsArr))
            return resultsArr
        })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
            return null
          })

    }
}

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
        return addProduct(product)
        .then ((id) => {
            dispatch(getAllProductsThunk())
            return id
        })
        .then ((id) => {
            return id
        })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
            return null
          })
    }
}

export function addPriceToCart(product){
    return (dispatch) => {
        dispatch(addToCart(product))
        dispatch(getCartTotal(product.price))
    }
}