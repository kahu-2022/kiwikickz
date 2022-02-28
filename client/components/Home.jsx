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
  
  const testFilter = { key: 'size', min: 9, max: 9.5 }

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