import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Header, Divider, Button } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { getAllTransactionThunk } from '../actions/products'


export default function Success() {
    const allTransactions = useSelector(globalState => globalState.allTransactions)

    const cart = useSelector(globalState => globalState.cart)
    const amount = useSelector(globalState => globalState.cartTotal)
    const { id } = useParams()
    const dispatch = useDispatch()

    console.log("all transactions", allTransactions)

    // const findTransaction = cart.find(shoe => shoe.id == Number(id))
    // console.log(findProduct)

    //json.parse to convert back on load. just transaction data field
    useEffect(() => {
        dispatch(getAllTransactionThunk())
    }, [])

    console.log("success cart", cart)
    console.log("success amount", amount)

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