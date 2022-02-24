import React from 'react'

import {Grid , Container} from 'semantic-ui-react'

import ProductCard from './ProductCard'

function ProductsContainer(props) {
  const product = props.data
  console.log(product)
  return (
    <>
    <Container>
    <Grid container columns={3} divided stackable>
    { product.map((element, i)=> <ProductCard data={element} key={element.name + i}/>)}
    </Grid>
    </Container>
    </>
  )
}

export default ProductsContainer