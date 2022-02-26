import React from "react";
import { Container, Button } from 'semantic-ui-react'
import { addToCart } from '../actions/products'
import { useDispatch } from 'react-redux' 
import { useNavigate } from 'react-router-dom'

function MakeOffer(props) {
  const product = props.data
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleBuyNow = () => {
    dispatch(addToCart(product))
    navigate('/cart')
  }

return (
  <>
  <Container>
  <Button onClick={handleBuyNow}>Buy Now</Button>
  <Button>Make Offer</Button>
  
  </Container>
  </>
)

}
export default MakeOffer