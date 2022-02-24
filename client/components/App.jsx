import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import Product from './Product'
import { Header } from 'semantic-ui-react'
import AddProduct from './AddProduct'

function App () {
  return (
    <>
      <header className="header">
      <header className="header">
        <Header as = 'h1' textAlign='center'>KiwiKickz</Header>
      </header>
      </header>
      <section className="main">
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/product/:id' element = {<Product/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/addproduct' element = {<AddProduct/>}/>
        </Routes>
      </section>
    </>
  )
}

export default App
