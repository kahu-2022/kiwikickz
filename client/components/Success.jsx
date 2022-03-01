import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Header, Divider, Button } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'


export default function Success() {
    const allTransactions = useSelector(globalState => globalState.allTransactions)

    const cart = useSelector(globalState => globalState.cart)
    const amount = useSelector(globalState => globalState.cartTotal)
    const { id } = useParams()

    // const findTransaction = allTransactions.find(shoe => shoe.id == Number(id))
    // console.log("final transcation", allTransactions)
    // console.log(" transcation ternary", allTransactions.id)
    // console.log("[0]", allTransactions[0])


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