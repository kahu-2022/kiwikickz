<<<<<<< HEAD
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsThunk } from '../actions/products'
import { Grid, Container, Divider } from 'semantic-ui-react'
<<<<<<< HEAD
=======

>>>>>>> 5cad5dec4323206ca1c05d671b8607de0b15e1a4
=======
import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'semantic-ui-react'
>>>>>>> c68fd0a0f2067c2de6fa120be29f430388410079

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