import React from 'react'
import { Icon, Label } from 'semantic-ui-react'

function ColorLabel(props) {
  const color = props.color
  return (
    <div>
      <Label>
        {color}
        <Icon name='delete' />
      </Label>
      
    </div>
  )
} 

export default ColorLabel