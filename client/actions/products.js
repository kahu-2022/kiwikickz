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

export function removeCartTotal(value) {
    return {
        type: 'REMOVE_CART_AMOUNT',
        removeTotal: value
    }
}

export function emptyCart() {
  return {
    type :'EMPTY_CART'
  }
}

export function emptyCartTotal() {
  return {
    type :'EMPTY_CART_TOTAL'
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
        return addProduct(product)
        .then ((id) => {
            dispatch(getAllProductsThunk())
            return id
        })
        .then ((id) => {
            //console.log("TESTING to see if the second .then WORKS ", id)
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

export function RemovePriceFromCart(product) {
    return (dispatch) => {
        dispatch(removeFromCart(product))
        dispatch(removeCartTotal(product.price))
    }
}