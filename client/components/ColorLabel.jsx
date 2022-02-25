import { handleRef } from '@fluentui/react-component-ref'
import React from 'react'
import { Icon, Label } from 'semantic-ui-react'

function ColorLabel(props) {
  const color = props.color
  const remove = props.del

  const handleClick = () => {
    remove(color)
  }
  return (
    <div>
      <Label>
        {color}
        <Icon name='delete' onClick={handleClick}/>
      </Label>
      
    </div>
  )
} 

export default ColorLabel