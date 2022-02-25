import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk } from '../actions/products'
import { Card, Grid , Icon, Image , Reveal} from 'semantic-ui-react'

function Product () {

 const { id } = useParams()
 const dispatch = useDispatch()
 const shoe = useSelector(globalState => globalState.allProducts[id - 1])

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  return (
    <>
    <header />
    <p>shoe id from URL is: {id}</p>
    <p>{shoe ? shoe.name : "nothing"}</p>
    <div>{shoe ? <Image size= 'medium' src={shoe.image1} /> : "nothing"}</div>
    <div>{shoe ? <Image size= 'medium' src={shoe.image2} /> : "nothing"}</div>
    <div>{shoe ? <Image size= 'medium' src={shoe.image3} /> : "nothing"}</div>
    <div>{shoe ? <Image size= 'medium' src={shoe.image4} /> : "nothing"}</div>
    </>
  )
}

export default Product