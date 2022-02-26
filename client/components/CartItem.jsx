import { Container, Item ,  Divider , Button} from 'semantic-ui-react'
import React from 'react'
import { Link } from 'react-router-dom'

function CartItem(props) {
  const cartItem = props.data
  return (
    <>
    <Item>
          <Item.Image size='small' src={`data:image/jpg;base64,${cartItem.image1}`} />
          <Item.Image size='small' src={`data:image/jpg;base64,${cartItem.image2}`} />
          <Item.Image size='small' src={`data:image/jpg;base64,${cartItem.image3}`} />
          <Item.Image size='small' src={`data:image/jpg;base64,${cartItem.image4}`} />

          <Item.Content>
            <Item.Header as='h3'>{cartItem.name}</Item.Header>
            <Item.Description></Item.Description>
            <Item.Extra>
            <Item.Description>{cartItem.details}</Item.Description>
            <Item.Description></Item.Description>
            <Item.Description>{cartItem.name}</Item.Description>
            <Item.Description>Condition : {cartItem.condition}</Item.Description>
            <Item.Description>Year : {cartItem.year}</Item.Description>
            <Item.Description>Size : {cartItem.size}</Item.Description>
            <Item.Description>Price : ${cartItem.price}</Item.Description>
            </Item.Extra>
          </Item.Content>
    </Item>
    <Divider/>
    <Container>
    <Link to={`/product/${cartItem.id}`}>
      <Button>View</Button>
    </Link>
    <Button>Remove</Button>
    </Container>
    <Divider/>
    </>
  )
}

export default CartItem