// TODO: use case vars from action file instead of strings

const initialState = 0

function cartTotal (state = initialState, action) { 
  switch(action.type) {
    case 'ADD_CART_AMOUNT': 
    return (state += action.addTotal)
    case 'REMOVE_CART_AMOUNT':
      return (state -= action.removeTotal)
    case 'EMPTY_CART_TOTAL' :
      return 0
    default: 
      return state
  }
}

export default cartTotal