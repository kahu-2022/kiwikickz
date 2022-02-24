import React from 'react'

import {Grid , Container} from 'semantic-ui-react'

import ShoeCard from './ShoeCard'

function ShoesContainer(props) {
  const shoes = props.data
  console.log(shoes)
  return (
    <>
    <Container>
    <Grid container columns={3} divided stackable>
    { shoes.map((element, i)=> <ShoeCard data={element} key={element.name + i}/>)}
    </Grid>
    </Container>
    </>
  )
}

export default ShoesContainer