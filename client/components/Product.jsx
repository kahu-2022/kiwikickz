import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import * as Base64 from 'base64-arraybuffer'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Image, Container, Segment , Header, Divider , Grid} from 'semantic-ui-react'
import ImageCarousel from "./ImageCarousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { getAllProductsThunk } from '../actions/products'
import MakeOffer from './MakeOffer';
import UserQuestion from "./UserQuestion";

function Product () {

 const { id } = useParams()
 const dispatch = useDispatch()
 const shoes = useSelector(globalState => globalState.allProducts)
 const shoe = shoes.find(shoe => shoe.id == Number(id))

 const decodedBytes = Base64.decode("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAB+0lEQVQ4jZWTTWgTURSFz3vz4rxJYyeJpRirJo0IYuhGDQpdVdwr4sqNm4IFUYQsDCgypm4UurEbV4qu7NLiPosYwbaUKog/oDXYRavTNv5MZ8aZzHWRWurEn/GuLod7Ps6Fe4FQNWvlVLNWToX1P5UIC2q868J6ey0KgP1sqGoIR3rjPJk8DgBBs/lQOrHzbMjwIwEAgAjMna3cBgD1wNURxkCRE9j1UlYbHGs40+U8ANjfnBUtta3CtXiRKXrO/zT/SHbHzrGC8f0XAJHB3af+sQC4GTDvTOLwjWfWVKUYS8i7scyeAtR+ct9W78iB0vDvEvCwsFq9mGyb+wvQBtBqflhQza8j/1oFdr2UBQBndvQWLd8jsqaI3Hfkvhh/8DffRgJtcKwBAFxqRTAOCB0AQN6XhUiAjRK8p+1UAABKvCf3fwAiDwAQrLUH0vmhz0+MdGQAef57AIC/2B7Ymk/Hd+yt2TOXdm+es2aunLAeXz7UccqB40wEjnOUyyUVSjcgeiEyR/Yreu6l1zj4GmSvQHTt9M35LTJl7WNhAADYc6MTat+uU0xROEQvIDIAjwPwgdYqWsuvFv2lxllZNCY7EgCAfPP8tEvMFLp+UtFpO/yP6+t5Lc8052CvXZdFYxII/UJHknopC00f5oL3kRd45AfTMoH7m8/5B3mfuxEjw7gsAAAAAElFTkSuQmCC")

//  let image = Image()
//   image.src = `data:image/jpg;base64,${decodedBytes}`



//add loader / skeleton
  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  return (
    <>
     <Container>
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

      <Container>
        <UserQuestion />
      </Container>
    </>
  )
}

export default Product