import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { Container } from 'semantic-ui-react'

import ProductContainer from './ProductContainer'

import { manyProductsManyFilters } from '../lib'

import { filters } from '../actions/products'

function Home() {
  
  const dispatch = useDispatch()

  const allProducts = useSelector(state => state.allProducts)
  const currentFilters = useSelector(state => state.currentFilters)
  
  console.log(allProducts)

  const testFilter = { key: 'size', value: 9 }

  const results = manyProductsManyFilters(allProducts, currentFilters)

  console.log(results)


  return (
    <>
      <input type='checkbox' onClick={() => { dispatch(filters(testFilter)) }}></input>
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