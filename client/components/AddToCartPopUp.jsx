import React from 'react'
import { Card, Popup , Icon} from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { RemovePriceFromCart, addPriceToCart} from '../actions/products'
import { useSelector } from 'react-redux'




function AddToCartPopUp ({ product }) {

  const inCart = useSelector(state => state.cart.find(item => item.id === product.id))
  const dispatch = useDispatch()

  return(
  <Popup
    content={
      <>
      {inCart ? 'Removed from Cart' : 'Added to cart.'}
      </>
    }
    on='click'
    popper={{ id: 'popper-container', style: { zIndex: 2000 } }}
    trigger={<Card.Header as='h2'>
      {inCart ?
      <a onClick={() => {dispatch(addPriceToCart(product))}}><Icon name='plus circle'/></a> 
      : <a onClick={() => {dispatch(RemovePriceFromCart(product))}}><Icon name='minus circle'/></a> }{`$ ${product.price}`} NZD</Card.Header>}
    hideOnScroll
  />
)}

export default AddToCartPopUp