import React from 'react'
import {Icon , Header , Divider } from 'semantic-ui-react'

function Footer () {
  return (
    <>
    <Header as = 'h2' textAlign='center'>
      <a><Icon name='instagram'></Icon></a>
      <a><Icon name='facebook official'></Icon></a>
      <a><Icon name='snapchat'></Icon></a>
    </Header>
    <Header as = 'h4' textAlign='center'> Kiwi Kickz &reg; {new Date().getFullYear()} </Header>
    <Divider/>
    </>
  )
}

export default Footer