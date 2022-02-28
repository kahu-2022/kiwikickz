import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Header, Divider, Button } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom'



export default function Success() {
    const location = useLocation
    const cart = useSelector(globalState => globalState.cart)
    const amount = useSelector(globalState => globalState.cartTotal)

    console.log(cart)

    return (
            <Container>
                <h2>Congratulations</h2>
                <h3>You successfully purchased the following items</h3>
                <ul>
                    {cart.map(eachItem => (<li>{eachItem.name}</li>))}
                </ul>
                <h2>Total Amount Paid </h2>
                <h3>${amount}</h3>
                <Button> Return to Home</Button>
            </Container>
    )
}