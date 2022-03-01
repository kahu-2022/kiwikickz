import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsThunk } from '../actions/products'
import { Grid, Container, Divider } from 'semantic-ui-react'
import Graph from './Chart'

import ProductContainer from './ProductContainer'

import { manyProductsManyFilters } from '../lib'

import { filters } from '../actions/products'

function Home() {

  const dispatch = useDispatch()

  const allProducts = useSelector(state => state.allProducts)
  const currentFilters = useSelector(state => state.currentFilters)

  const [sortedProducts, setSortedProducts] = useState('')

  const testFilter = { key: 'price', min: 230, max: 270 }

  const results = manyProductsManyFilters(allProducts, currentFilters)

  // console.log(results)
  // console.log('currentFilters', currentFilters)


  return (
    <>
      {/* <select name="choice">
        <option value="first">First Value</option>
        <option value="second" selected>Second Value</option>
        <option value="third">Third Value</option>
      </select> */}
      <Container style={{ marginTop: '3em' }}>

        {allProducts ? <ProductContainer data={results} /> : null}

      </Container>

    </>
  )
}

export default Home