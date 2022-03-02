import { combineReducers } from 'redux'
import allProducts from './allProducts'
import product from './product'
import cart from './cart'
import allQuestions from './allQuestions'
import currentFilters from "./currentFilters";
import cartTotal from './carttotal'
import allTransactions from './allTransactions'

export default combineReducers({
  allProducts,
  product,
  cart,
  allQuestions,
  allTransactions,
  currentFilters,
  cartTotal
})
