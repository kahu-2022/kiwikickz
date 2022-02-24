import React from 'react'
import { Card, Grid , Icon, Image , Reveal} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function ShoeCard(props) {
  const obj = props.data

  return (
    <>
    <Link to={`/product/${obj.id}`}>
    <Grid.Column>
      <Card>
        <Reveal animated='move right'>
        <Reveal.Content visible>
          <Image size= 'medium' src={obj.image1}/>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image size= 'medium' src={obj.image2} />
        </Reveal.Content>
      </Reveal>
        <Card.Content>
          <Card.Header>{obj.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{obj.createdDate}</span>
          </Card.Meta>
          <Card.Description>
            {`Size : ${obj.size}`}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Header as='h2'><Icon name='plus circle'/>{`$ ${obj.price}`}</Card.Header>
          
        </Card.Content>
      </Card>

  </Grid.Column>
  </Link>
  </>
  )
}

export default ShoeCard