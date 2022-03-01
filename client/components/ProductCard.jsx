import React from 'react'
import { Card, Grid , Icon, Image , Reveal , Label} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import AddToCartPopUp from './AddToCartPopUp'

function ProductCard(props) {
  const obj = props.data
  

  return (
    <>
    
    <Grid.Column>
      <Card>
      <Link to={`/product/${obj.id}`}>
        {obj.hotPick ? <Label color='black' ribbon>
        🔥 HOTPICK 🔥
        </Label> : null}
        
        <Reveal animated='move right'>
        <Reveal.Content visible>
          <Image size= 'medium' src={`data:image/jpg;base64,${obj.image1}`}/>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image size= 'medium' src={`data:image/jpg;base64,${obj.image2}`} />
        </Reveal.Content>
      </Reveal>
      </Link>
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
          <AddToCartPopUp data={obj}/>
          
        </Card.Content>
      </Card>

  </Grid.Column>
  
  </>
  )
}

export default ProductCard