import React, { useState } from 'react'
import{ Menu, Icon , Input, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

function Nav({ setVis, vis, searchBar }) {

  const cartTotal = useSelector(state => state.cartTotal)
  
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
        <Input icon='search' placeholder='Search...' name = 'search-bar' ref={searchBar}/>
      </Menu.Item>
          
      <Menu.Item >
        <Link to='/about' className='link'>
          About
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/cart' className='link'>
      <Icon name='cart'/> $ {cartTotal}
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