import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Header, Divider, Button } from 'semantic-ui-react'


export default function Success() {
    const cart = useSelector(globalState => globalState.cart)
    const amount = useSelector(globalState => globalState.cartTotal)

    console.log(cart)

    return (
        <div>
            <Container>
                <h2>Congratulations</h2>
                <h3>you successfully purcahsed the following items</h3>
                <ul>
                    {cart.map(eachItem => (<li>{eachItem.name}</li>))}
                </ul>
                <h2>Total Amount Paid </h2>
                <h3>${amount}</h3>
            </Container>
        </div>
    )
}
