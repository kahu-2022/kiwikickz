import React from 'react'

import FilterBrand from "./FilterBrand"
import FilterSize from "./FilterSize"
import FilterPrice from "./FilterPrice"
import FilterCondition from "./FilterCondition"

import {
  Icon,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar,
  GridColumn,
  Accordion,
  Input,
  Checkbox
} from "semantic-ui-react"

function Sidebar () {
  return (
    <Sidebar
    as={Menu}
    animation="overlay"
    icon="labeled"
    inverted
    onHide={() => setVisible(false)}
    vertical
    visible={visible}
    width="wide"
  >
    <Menu.Item as="a" onClick={() => {searchBar.current.focus(), setVisible(!visible)}}>
      <Icon name="search" />
      Search
    </Menu.Item> 
    
    <Menu.Item onClick={() => {cartClick()}}>
      <Icon name="cart" />
      Cart
    </Menu.Item>

    <Menu.Item><Icon name="sliders horizontal" />Filter</Menu.Item>
    <Menu.Item>🔥 HOTPICKS 🔥 <Checkbox defaultChecked/></Menu.Item>
    <Menu.Item><FilterBrand/></Menu.Item>
    <Menu.Item><FilterCondition/></Menu.Item>
    <Menu.Item><FilterPrice/></Menu.Item>
    <Menu.Item><FilterSize/></Menu.Item>
  </Sidebar>
  )
} 

export default Sidebar
