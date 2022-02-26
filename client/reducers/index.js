import { combineReducers } from 'redux'
import allProducts from './allProducts'
import product from './product'
import cart from './cart'
import isProductArrFull from './isThereShitInTheProductState'

export default combineReducers({
  allProducts,
  product,
  cart,
  isProductArrFull
})
