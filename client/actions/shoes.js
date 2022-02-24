import {getAllShoes} from '../apis'

export const GET_ALL_SHOES = "GET_ALL_SHOES"

export function getAllShoesAction(shoeArr) {
    return {
        type: GET_ALL_SHOES,
        shoeArr: shoeArr
    }
}

export function addToCart(product) {
    return {
        type: 'ADD_ITEM',
        product: product
    }
}

// THUNKS

export function getAllShoesThunk() {
    return (dispatch) => {
        getAllShoes()
        .then (shoeArr => {
            dispatch(getAllShoesAction(shoeArr))
        })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
            return null
          })

    }
}


