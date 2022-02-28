import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Header, Divider, Button,  Item  } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom'
import SuccessItem from './SuccessItem'



export default function Success() {
    const location = useLocation
    const cart = useSelector(globalState => globalState.cart)
    const amount = useSelector(globalState => globalState.cartTotal)


    return (
            <Container>
                <Header as='h2'>Congratulations</Header>
                <Header as='h3'>You successfully purchased the following items</Header>
                <Item.Group>
                  {cart.map( item => <SuccessItem item={item}/>)}
                </Item.Group>
                <Header as='h2'>Total Amount Paid </Header>
                <Header as='h3'>${amount}</Header>
                <Link to='/'>
                  <Button> Return to Home</Button>
                </Link>
            </Container>
    )
}