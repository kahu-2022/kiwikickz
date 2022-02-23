import {getAllShoes} from '../apis'

export const ADD_SHOES = "ADD_SHOES"

export function addAllShoes(shoeArr) {
    return {
        type: ADD_SHOES,
        shoes: shoeArr
    }
}

// THUNKS

export function addAllShoesThunk() {
    return (dispatch) => {
        getAllShoes()
        .then(shoeArr => {
            dispatch(addAllShoes(shoeArr))
        })

    }
}