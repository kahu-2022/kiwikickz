import React, {useState} from "react";
import { Container, Button, Input, Label , Divider , Grid, Header, Icon, Segment} from 'semantic-ui-react'
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
  <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical/>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='dollar sign' />
            Buy Now <br/>
            ${product ? product.price : null}
          </Header>

          <Button onClick={handleBuyNow}>Add to Cart</Button>
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='question circle outline' />
            Make an Offer
          </Header>
          <Grid.Row>
          {offer ? dropOffer() : null}
          { offer ? null : <Button onClick = {toggleOffer} >Make Offer</Button> }
          </Grid.Row>
          
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

}
export default MakeOffer