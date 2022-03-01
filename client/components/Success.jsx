import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Header, Divider, Button } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { getAllTransactionThunk } from '../actions/transaction'


export default function Success() {
    const allTransactions = useSelector(globalState => globalState.allTransactions)

    const cart = useSelector(globalState => globalState.cart)
    const amount = useSelector(globalState => globalState.cartTotal)
    const { id } = useParams()

    // const findTransaction = allTransactions.find(shoe => shoe.id == Number(id))
    console.log("final transcation", allTransactions)
    console.log(" transcation ternary", allTransactions.id)

    console.log("[0]", allTransactions[0])


    // allTransactions.map(trans => console.log(trans))

    // console.log("final transcation", findTransaction?.productsPurchased)
    // const purchased = findTransaction?.productsPurchased
    // const antistringy = JSON.parse(purchased)
    // console.log("parse back", antistringy)

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