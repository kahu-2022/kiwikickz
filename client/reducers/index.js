import { combineReducers } from 'redux'
import allShoes from './allShoes'
import shoe from './shoe'
import cart from './cart'


export default combineReducers({
  allShoes,
  shoe,
  cart
})
