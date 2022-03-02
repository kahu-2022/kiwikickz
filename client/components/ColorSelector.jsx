import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { options } from 'superagent'

const colourOptions = [
  { text: 'White', value: 'White' },
  { text: 'Black' , value: 'Black'},
  { text: 'Red' , value: 'Red'},
  { text: 'Orange' , value: 'Orange'},
  { text: 'Yellow', value: 'Yellow' },
  { text: 'Green' , value: 'Green'},
  { text: 'Blue' , value: 'Blue'},
  { text: 'Indigo' , value: 'Indigo'},
  { text: 'Purple' , value: 'Purple'},
  { text: 'Pink' , value: 'Pink'},
  { text: 'Multi-colour', value: 'Multi-colour'}
]

function ColorSelector (props) { 
  const setColor = props.data
 return  ( 
  <Dropdown
    placeholder='Select Colour'
    fluid
    search
    selection
    options={colourOptions}
    onChange= {(e , data)=> {setColor(data.value)} }
    value = {options.value}
  />
)}

export default ColorSelector
