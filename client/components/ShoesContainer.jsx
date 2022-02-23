import React from 'react'

import {Grid , Container} from 'semantic-ui-react'

function ShoesContainer(props) {
  const shoes = props.data
  return (
    <>
    <Container>
    <Grid container columns={6} divided stackable>
    { shoe.map ((element, i)=> <ShoeCard data={element} key={element.name + i}/>)}
    </Grid>
    </Container>
    </>
  )
}

export default ShoesContainer