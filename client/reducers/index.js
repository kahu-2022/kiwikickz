import { combineReducers } from 'redux'
import allProducts from './allProducts'
import product from './product'
import cart from './cart'

export default combineReducers({
  allProducts,
  product,
  cart
})
