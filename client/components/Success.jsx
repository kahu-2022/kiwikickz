import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Header, Button,  Item  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import SuccessItem from './SuccessItem'

export default function Success() {

    const cart = useSelector(globalState => globalState.cart)
    const amount = useSelector(globalState => globalState.cartTotal)
    const customerState = useSelector(globalState => globalState.customerState)

    console.log(customerState)

    return (
            <Container>
                <Header as='h2'>Congratulations</Header>
                <Header as='h3'>You successfully purchased the following items : </Header>
                <Item.Group>
                  {cart.map( item => <SuccessItem item={item}/>)}
                </Item.Group>
                <Header as='h2'>Total Amount Paid </Header>
                <Header as='h3'>${amount}</Header>
                <Header as='h4'>The receipt has been sent to the following email address - {customerState.email}</Header>
                <Header as='h4'>The items will be delivered to {customerState.card.address_line1}, {customerState.card.address_city} </Header>
                <Link to='/'>
                  <Button> Return to Home</Button>
                </Link>
                <Header as='h6'> customer IP - {customerState.client_ip}</Header>
            </Container>
    )
}