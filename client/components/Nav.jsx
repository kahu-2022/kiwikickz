import React, { useState } from 'react'
import{ Menu, Icon , Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Nav(props) {
  
  return (
    <>
    <Menu>
      <Menu.Item>
        <Icon name='sidebar'/>
      </Menu.Item>
      <Menu.Item>
        <Link to='/'>
          Home
        </Link>
      </Menu.Item>
      
       <Menu.Item position='right'>
          <Input icon='search' placeholder='Search...' />
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