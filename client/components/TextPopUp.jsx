import React from 'react'
import { Card, Popup , Icon} from 'semantic-ui-react'
import { useDispatch } from 'react-redux'




function TextPopUp (props) {

  const product = props.data
  const text = props.text
  const button = props.button
  const dispatch = useDispatch()

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