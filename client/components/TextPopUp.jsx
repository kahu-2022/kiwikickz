import React from 'react'
import { Card, Popup } from 'semantic-ui-react'

function TextPopUp (props) {

  const text = props.text
  const button = props.button

  return(
  <Popup
    content={
      <>
        {text}
      </>
    }
    on='click'
    popper={{ id: 'popper-container', style: { zIndex: 2000 } }}
    trigger={<Card.Header as='h2'>{button}</Card.Header>}
    hideOnScroll
  />
)}

export default TextPopUp