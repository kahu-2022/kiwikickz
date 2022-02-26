import React, {useState} from "react";
import { Container, Button, Input, Label } from 'semantic-ui-react'
import { addToCart } from '../actions/products'
import { useDispatch } from 'react-redux' 
import { useNavigate } from 'react-router-dom'
import  TextPopUp  from "./TextPopUp";
function MakeOffer(props) {
  const product = props.data
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [offer, setOffer] = useState(false)

  const handleBuyNow = () => {
    dispatch(addToCart(product))
    navigate('/cart')
  }

  const toggleOffer=() =>{
    return offer ? setOffer(false) : setOffer(true)
  }
  
  const dropOffer=() => {
   return (
     <>
    <Input labelPosition='right' type='text' placeholder='Amount'>
    <Label basic>$</Label>
    <input />
    <Label>.00</Label>
    </Input>
    <TextPopUp text={'Offer Sent.'} button = {<Button>Submit</Button>}/>
    </>
   ) 
  }

return (
  <>
  <Container>
  <Button onClick={handleBuyNow}>Buy Now</Button>
  <Button onClick = {toggleOffer} >Make Offer</Button>
  {offer? dropOffer() : null}

  </Container>
  </>
)

}
export default MakeOffer