import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { getAllProductsThunk } from '../actions/products'
import {Grid , Container} from 'semantic-ui-react'

import ProductContainer from './ProductContainer'
import ProductCard from './ProductCard'

import { manyProductsFitsFilter } from '../lib'

function Home () {

  const allProducts = useSelector(state => state.allProducts)
  
  console.log(allProducts)

  // const [hotPicks, setHotPicks ] = useState(true)
  // const [filters, setFilters] = useState()

  const fuckMyArseFilter = {key: 'hotPick', value: 1}

  
  const results = manyProductsFitsFilter(allProducts, fuckMyArseFilter)

  console.log(results)

  return (
        <>
          <Container style={{ marginTop: '3em' }}>
            {/* <ProductContainer data={allProducts}/> */}
            {/* Search functionality immplemented here */}
            {/* Filter entire Array for all different key value pairs, then remove any repeats and then format for displaying search boxes */}

    
            {allProducts ? <ProductContainer data={results} /> : null}

          </Container>

          {/* Ternary here sets initial display as hot picks */}
          {/* {hotPicks ? renders hotpics : renders search functionality} */}
          {/* Cards Section where we map over the filtered array*/}

        </>
  )
}

export default Home