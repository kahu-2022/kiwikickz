import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container, Header, Divider , Grid} from 'semantic-ui-react'
import ImageCarousel from "./ImageCarousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import MakeOffer from './MakeOffer';
import { getAllTransactionThunk } from '../actions/transaction';
import QuestionUser from "./QuestionUser";

function Product () {

 const { id } = useParams()
 const dispatch = useDispatch()
 const shoes = useSelector(globalState => globalState.allProducts)
 const shoe = shoes.find(shoe => shoe.id == Number(id))

//add loader / skeleton
  useEffect(() => {
    dispatch(getAllTransactionThunk())
  }, [])

  return (
    <>
     <Container>
       {shoe?.status === 'sold' ? <Header as='h4' color='red' textAlign='center'>This product is no longer available sorry.</Header> : null}
      <Container id="Carousel">
      <Divider/>
      <Header as='h2'>{shoe?.name}</Header>
      <Grid container columns={2} divided stackable>
        <ImageCarousel product = {shoe} />
        <MakeOffer data = {shoe} />
      </Grid>
      </Container>

      
      <Divider/>
      </Container>
      {shoe?.status === 'sold' ? null :
      <Container>
        <QuestionUser />
      </Container> }
    </>
  )
}

export default Product