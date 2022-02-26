import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsThunk } from '../actions/products'

import {Routes, Route, Link} from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import Product from './Product'
import { Header } from 'semantic-ui-react'
import AddProduct from './AddProduct'

function App() {
  
  const isProductArrFull = useSelector(state => state.isProductArrFull)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  return (
    <>
      {isProductArrFull
        ? <>
          <header className="header">
            <header className="header">
              <Header as='h1' textAlign='center'>KIWIKICKZ</Header>
            </header>
          </header>
          <section className="main">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/addproduct' element={<AddProduct />} />
            </Routes>
          </section>
        </>
        : null
      }
    </>
  )
}

export default App
