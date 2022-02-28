const initialState = 0

function cartTotal(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CART_AMOUNT':
      return (state += action.addTotal)
    case 'REMOVE_CART_AMOUNT':
      return (state -= action.removeTotal)
    default:
      return state
  }
}

export default cartTotal