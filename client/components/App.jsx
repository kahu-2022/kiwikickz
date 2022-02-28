import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Link, useNavigate } from "react-router-dom"

import { getAllProductsThunk } from '../actions/products'
import { filters } from '../actions/products'

import Cart from "./Cart"
import Home from "./Home"
import Product from "./Product"
import AddProduct from "./AddProduct"
import Nav from "./Nav"
import Footer from "./Footer"
import About from './About'

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


function App() {
  const [visible, setVisible] = useState(false)
  const [toggleSearch, setToggleSearch] = useState(false)
  const navigate = useNavigate()

  const isProductArrFull = useSelector(state => state.allProducts)

  const dispatch = useDispatch()

  useEffect(() => {
          dispatch(getAllProductsThunk())
  }, [])
  
  const cartClick = () => {
    setVisible(!visible)
    navigate('/cart')
  }

  return (
        <>
          {isProductArrFull
        ? <>
          <Grid columns={1}>
            <Grid.Column>
              <header className="header">
                <Nav setSideBar={[visible, setVisible]} />
              </header>
            </Grid.Column>
            <Grid.Column>
              <Sidebar.Pushable as={Segment}>
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
                  <Menu.Item as="a" onClick={() => { setToggleSearch(!toggleSearch) }}>
                    <Icon name="search" />
                Search
              </Menu.Item>

                  <Menu.Item onClick={() => { cartClick() }}>
                    <Icon name="cart" />
                Cart
              </Menu.Item>

                  <Menu.Item>
                    <Icon name="sliders horizontal" />
                Filter
              </Menu.Item>
                  <Menu.Item>
                    🔥 HOTPICKS 🔥 <Checkbox onClick={() => { dispatch(filters({ key: 'hotPick', value: 1 })) }} defaultChecked />
                  </Menu.Item>
                  <Menu.Item>
                    <FilterBrand />
                  </Menu.Item>
                  <Menu.Item>
                    <FilterCondition />
                  </Menu.Item>
                  <Menu.Item>
                    <FilterPrice />
                  </Menu.Item>
                  <Menu.Item>
                    <FilterSize />
                  </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                  <Segment basic>
                    <section className="main">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:id" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/addproduct" element={<AddProduct />} />
                        <Route path='/about' element={<About />} />
                      </Routes>
                      <Footer />
                    </section>
                  </Segment>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </Grid.Column>
          </Grid>
        </>
             : null
          }
      </>
  )
}


export default App
