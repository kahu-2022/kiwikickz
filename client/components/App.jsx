import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import Product from './Product'

function App () {
  return (
    <>
      <header className="header">
        <h1>Kiwikickz</h1>
      </header>
      <section className="main">
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/product/:id' element = {<Product/>}/>
          <Route path='/cart' element = {<Cart/>}/>
        </Routes>
      </section>
    </>
  )
}

export default App
