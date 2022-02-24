import React, {useState} from 'react';
import { shallowEqual } from 'react-redux';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



function Product () {

 const { id } = useParams()


  return (
    <>
    <header />
    <h2>Products</h2>
    <p>shoe id from URL is: {id}</p>
    </>
  )
}

export default Product