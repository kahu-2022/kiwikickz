import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux'
import{ Menu, Icon , Input, Header } from 'semantic-ui-react'


function Nav(props) {

  const dispatch = useDispatch()
  const allProducts = useSelector(state => state.allProducts)
  
  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <>
    <Menu>
      <Menu.Item>
        <Icon name='sidebar'/>
      </Menu.Item>
      <Menu.Item>
      <Link to='/'>
        <Header as = 'h1' textAlign='center'>KIWIKICKZ</Header>
        </Link>
      </Menu.Item>

      {/* Add the Search Functionality here */}
      <Menu.Item position='right'>
        <Input icon={{ name: 'search', circular: true, link: true, onClick: handleClick}}
        placeholder='Search...' />
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