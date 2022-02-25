import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { getAllProductsThunk } from '../actions/products'
import {Grid , Container} from 'semantic-ui-react'

import ProductContainer from './ProductContainer'
import ProductCard from './ProductCard'

function Home () {

  const allProducts = useSelector(state => state.allProducts)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  const [hotPicks, setHotPicks ] = useState(true)
  const [filters, setFilters ] = useState()

  return (
    <>
    <Container style={{ marginTop: '3em'}}>
    {/* <ProductContainer data={allProducts}/> */}
    {/* Search functionality immplemented here */}
    {/* Filter entire Array for all different key value pairs, then remove any repeats and then format for displaying search boxes */}

    
      {allProducts ? <ProductContainer data={allProducts}/> : null}

    </Container>

    {/* Ternary here sets initial display as hot picks */}
    {/* {hotPicks ? renders hotpics : renders search functionality} */}
    {/* Cards Section where we map over the filtered array*/}

    </>
  )
}

export default Home