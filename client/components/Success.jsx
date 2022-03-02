import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Header, Divider, Button,  Item  } from 'semantic-ui-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SuccessItem from './SuccessItem'
import { emptyCart, emptyCartTotal } from '../actions/products'



export default function Success() {
    const allTransactions = useSelector(globalState => globalState.allTransactions)

    const cart = useSelector(globalState => globalState.cart)
    const amount = useSelector(globalState => globalState.cartTotal)
    const dispatch = useDispatch()

    return (
            <Container>
                <Header as='h2'>Congratulations</Header>
                <Header as='h3'>You successfully purchased the following items : </Header>
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