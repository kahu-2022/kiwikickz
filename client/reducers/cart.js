const initialState = []

function cart (state = initialState, action) { 
  switch(action.type) {
    case 'ADD_ITEM' : 
    const cart = state.filter( item => item.id !== action.product.id)
      return [...cart, action.product]
    default: 
      return state
  }
}

export default cart