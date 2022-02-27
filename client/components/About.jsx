import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { getAllProductsThunk } from '../actions/products'
import {Container , Divider, Header} from 'semantic-ui-react'

 
function Home () {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])


  return (
    <div>
    <Container style={{ marginTop: '2em', paddingLeft: '2em', paddingRight: '2em'}}>
        <Divider/>
        <Header as='h1' style={{textAlign: 'center'}}>About</Header>
        <Divider/>
        <p> 
        Welcome to KiwiKickz, we are New Zealands one stop shop for buying and selling Authenticated Footwear. Buyers can purchase and view new & used products on our nationwide market place with the confidence that products marked as "Authenticated" are Authentic, not fake.
        </p>
        <p>
		    The sellers will have the chance to sell their products to a national audience at a very small cost compared to on-selling in a storefront. This mitigates the issue of localized selling exposure and potentially high commission costs when on-selling in a retail store-front.
        </p>
        <p>
		    If any item we have sold as "Authenticated" is proven to be unauthentic by a customer we will provide a full refund upon receiving the returned item and will cover the shipping cost involved for returning.
        </p>
        <Header as='h2'>Our Why</Header>
        <p>
        It is our goal to link buyers and sellers in NZ and create a safe market place for trade. We also want to create a competitive market that allows sellers to sell items close to their current market value without the added costs incurred when on selling at a retail store. Buyers can negotiate with sellers and get the best value for money.
        </p>
        <Header as='h2'>The Process</Header>
        <p>
        We offer sellers the ability to Authenticate their shoes using a Third-Party service which we can process once we have received the sellers shoes, this service is quick and very cheap (only $3us per check). Once Authenticated, the product will be flagged as "Authenticated". We highly recommend the use of this service as it will increase the chances of selling the item (close to market Value) and buyers will bid with Confidence. If however the shoes are processed as "Unauthentic" we will not be able to sell the items and will ship them back to the seller (at the sellers cost). Those marked as "Unable to Authenticate" will have the ability to sell on the site still.
        </p>
    </Container>
    </div>
  )
}

export default Home