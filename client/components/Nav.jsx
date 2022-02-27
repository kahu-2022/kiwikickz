import React, { useState } from 'react'
import{ Menu, Icon , Input, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Nav(props) {
  const setVis = props.setSideBar[1]
  const vis = props.setSideBar[0]
  
  return (
    <>
    <Menu>
      <Menu.Item>
        <Icon name='sidebar'onClick={() => setVis(!vis)}/>
      </Menu.Item>
      <Menu.Item>
      <Link to='/'>
        <Header as = 'h1' textAlign='center'>KIWIKICKZ</Header>
        </Link>
      </Menu.Item>
      <Menu.Item position='right'>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
          
      <Menu.Item>
        <Link to='/about'>
          About
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/cart'>
      <Icon name='cart'/>
      </Link>
      </Menu.Item>
      <Menu.Item >
      Login
      </Menu.Item>
      <Menu.Item>
      Register
      </Menu.Item>
    </Menu>
    </>
  )
}

export default Nav