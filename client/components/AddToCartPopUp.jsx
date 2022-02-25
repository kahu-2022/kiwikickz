import React from 'react'
import { Card, Popup , Icon} from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/products'



function AddToCartPopUp (props) {

  const product = props.data
  const dispatch = useDispatch()

  return(
  <Popup
    content={
      <>
        Added to cart. 
      </>
    }
    on='click'
    popper={{ id: 'popper-container', style: { zIndex: 2000 } }}
    trigger={<Card.Header as='h2'><a onClick={() => {dispatch(addToCart(product))}}><Icon name='plus circle'/></a>{`$ ${product.price}`}</Card.Header>}
    hideOnScroll
  />
)}

export default AddToCartPopUp