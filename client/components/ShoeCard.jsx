import React from 'react'
import { Card, Grid , Icon} from 'semantic-ui-react'

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
        {obj.details}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
      <Card.Header>{obj.price}</Card.Header>
      </a>
    </Card.Content>
  </Card>

  </Grid.Column>
  )
}

export default ShoeCard