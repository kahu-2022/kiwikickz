import React from 'react'
import { Image, Item } from 'semantic-ui-react'

function SuccessItem(props){
  const item = props.item
  return (
    <Item>
      <Item.Image size='tiny' src={`data:image/jpg;base64,${item.image1}`} />

      <Item.Content>
        <Item.Header as='a'>{item.name}</Item.Header>
        <Item.Meta>{item.size} {item.gender}</Item.Meta>
        <Item.Description>
          {item.details}
        </Item.Description>
        <Item.Extra>{item.price}</Item.Extra>
      </Item.Content>
    </Item>
)
}

export default SuccessItem