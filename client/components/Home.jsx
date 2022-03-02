import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'semantic-ui-react'

import ProductContainer from './ProductContainer'

import { manyProductsManyFilters } from '../lib'

function Home() {

  const allProducts = useSelector(state => state.allProducts)
  const currentFilters = useSelector(state => state.currentFilters)

  const results = manyProductsManyFilters(allProducts, currentFilters)

  return (
    <>
      <Container style={{ marginTop: '3em' }}>

        {allProducts ? <ProductContainer data={results} /> : null}

      </Container>

    </>
  )
}

export default Home