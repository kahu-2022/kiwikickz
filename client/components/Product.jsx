import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Image, Container, Segment , Header, Divider} from 'semantic-ui-react'
import ImageCarousel from "./ImageCarousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { getAllProductsThunk } from '../actions/products'
import MakeOffer from './MakeOffer';

function Product () {

 const { id } = useParams()
 const dispatch = useDispatch()
 const shoes = useSelector(globalState => globalState.allProducts)
 const shoe = shoes.find(shoe => shoe.id == Number(id))

//add loader / skeleton
  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  return (
    <>
     
      <Container id="Carousel">
      <Divider/>
      <Header as='h2'>{shoe?.name}</Header>
        <Segment attached="bottom">
          <ImageCarousel product = {shoe} />
        </Segment>
      </Container>

      <MakeOffer data = {shoe} />
      <Container id="description">
        <p><strong>Description: <br/></strong>{shoe?.details}</p>
        <p><strong>Brand: </strong>{shoe?.brand}</p>
        <p><strong>Color: </strong>{shoe?.color}</p>
        <p><strong>Condition: </strong>{shoe?.condition}</p>
        <p><strong>Model: </strong>{shoe?.model}</p>
        <p><strong>Year: </strong>{shoe?.year}</p>
      </Container>
    </>
  )
}

export default Product