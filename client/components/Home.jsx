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
  
  const testFilter = { key: 'price', min: 230, max: 270 }

  const results = manyProductsManyFilters(allProducts, currentFilters)

  console.log(results)


  return (
    <>
      <input type='checkbox' onClick={() => { dispatch(filters(testFilter)) }}></input>
      <Container style={{ marginTop: '3em' }}>
        
        {allProducts ? <ProductContainer data={results} /> : null}

      </Container>

    </>
  )
}

export default Home