import React, {useState} from "react";
import { Container, Button, Input, Label , Divider , Grid, Header, Icon, Segment} from 'semantic-ui-react'
import { addToCart, addPriceToCart } from '../actions/products'
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
    dispatch(addPriceToCart(product))
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
    {product?.status === 'sold' ? <input disabled placeholder="unavailable"/> : <input/> }
    </Input>
    <TextPopUp text={'Offer Sent.'} button = {<Button>Submit</Button>}/>
    </>
   ) 
  }

return (

  <Grid.Column>
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
          {product?.status === 'sold' ? <Button disabled>Unavailable</Button>:<Button onClick={handleBuyNow}>Add to Cart</Button> }
          
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
  <Container id="description">
        <p><strong>Size: </strong>{product?.size}US - {product?.gender}</p>
        <p><strong>Brand: </strong>{product?.brand}</p>
        <p><strong>Color: </strong>{product ? JSON.parse(product?.color).join(", ") : null}</p>
        <p><strong>Condition: </strong>{product?.condition}</p>
        <p><strong>Model: </strong>{product?.model}</p>
        <p><strong>Year: </strong>{product?.year}</p>
        <p><strong>Description: <br/></strong>{product?.details}</p>
      </Container>
  </Grid.Column>
)

}
export default MakeOffer