import {getAllShoes} from '../apis'

export const ADD_SHOES = "ADD_SHOES"

export function addAllShoes(shoeArr) {
    return {
        type: ADD_SHOES,
        shoeArr: shoeArr
    }
}

// THUNKS

export function addAllShoesThunk() {
    return (dispatch) => {
        getAllShoes()
        .then (shoeArr => {
            dispatch(addAllShoes(shoeArr))
        })
        .catch ( err => {
            const errMessage = err.response?.text || err.message
            console.log(errMessage)
            return null
          })

    }
}


// export function fetchOrders() {
//     return ((dispatch) => {
//       dispatch(orderPending())
//       getOrders()
//       .then(thing => {
//         console.log(thing)
//         dispatch(saveOrders(thing))
//         dispatch(orderSuccess())
//       })
//       .catch((err) => {
//         const errMessage = err.response?.text || err.message
//           dispatch(showError(errMessage))
//       })
//     })