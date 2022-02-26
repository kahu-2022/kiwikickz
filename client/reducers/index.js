import { combineReducers } from 'redux'
import allProducts from './allProducts'
import product from './product'
import cart from './cart'
import allQuestions from './allQuestions'

export default combineReducers({
  allProducts,
  product,
  cart,
  allQuestions
})
