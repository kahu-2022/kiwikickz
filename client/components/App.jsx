import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import Product from './Product'
import { Header } from 'semantic-ui-react'
import AddProduct from './AddProduct'
import Nav from './Nav'
import Success from './Success'
import Footer from './Footer'


function App () {

  return (
    <>
      <header className="header">
        <Nav/>
      </header>
      <section className="main">
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/product/:id' element = {<Product/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/addproduct' element = {<AddProduct/>}/>
          <Route path='/success' element={<Success />}/>
        </Routes>
      <Footer/>
      </section>
    </>
  )
}

export default App
