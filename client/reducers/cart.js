const initialState = []

function cart (state = initialState, action) { 
  switch(action.type) {
    case 'ADD_ITEM' : 
    const cart = state.filter( item => item.id !== action.product.id)
      return [...cart, action.product]
    case 'REMOVE_ITEM': 
    const minusCart = state.filter( item => item.id !== action.product.id)
    return minusCart
    case 'CART_TOTAL':
    const cartTotal = state.map(cartItem => total += cartItem.price)
    return cartTotal
    default: 
      return state
  }
}

export default cart