import React from 'react'
import { Card, Grid , Icon, Image , Reveal} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function ShoeCard(props) {
  const obj = props.data

  return (
    <Grid.Column>
      <Card>
        <Image src={obj.image1} wrapped ui={false} />
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
          <a>
          <Card.Header as='h2'>{`$ ${obj.price}`}</Card.Header>
          </a>
        </Card.Content>
      </Card>

  </Grid.Column>
  )
}

export default ShoeCard