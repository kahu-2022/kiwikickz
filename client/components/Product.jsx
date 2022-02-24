import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllShoesThunk } from '../actions/shoes'
import { Image } from 'semantic-ui-react'
import ImageCarousel from "./ImageCarousel";

function Product () {

 const { id } = useParams()
 const dispatch = useDispatch()
 const shoes = useSelector(globalState => globalState.allShoes)
 const shoe = shoes.find(shoe => shoe.id == Number(id))

//add loader / skeleton
  useEffect(() => {
    dispatch(getAllShoesThunk())
  }, [])

  return (
    <>
    <header />
    <ImageCarousel product = {shoe} />
    <p>shoe id from URL is: {id}</p>
    <p>{shoe ? shoe.name : "nothing"}</p>
    <p>{shoe?.name}</p>
    <div>{<Image  size= 'medium' src={shoe ? shoe.image1 : "loading" } />}</div>

    <div>{shoe ? <Image size= 'medium' src={shoe.image1} /> : "loading"}</div>
    <div>{shoe ? <Image size= 'medium' src={shoe.image2} /> : "loading"}</div>
    <div>{shoe ? <Image size= 'medium' src={shoe.image3} /> : "loading"}</div>
    <div>{shoe ? <Image size= 'medium' src={shoe.image4} /> : "loading"}</div>
    </>
  )
}

export default Product