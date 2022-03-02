import React, { useState, useRef, useEffect } from "react"
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Cart from './Cart'
import Home from './Home'
import Product from './Product'
import AddProduct from './AddProduct'
import Nav from './Nav'
import Footer from './Footer'
import QuestionAdmin from './QuestionAdmin'
import About from './About'
import { useDispatch, useSelector } from 'react-redux'

import { getAllProductsThunk } from '../actions/products'
import { filters } from '../actions/products'

import FilterBrand from "./FilterBrand"
import FilterSize from "./FilterSize"
import FilterPrice from "./FilterPrice"
import FilterCondition from "./FilterCondition"
import Success from './Success'
import { addTransactionThunk } from '../actions/transaction'
import Admin from './Admin'

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
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isProductArrFull = useSelector(state => state.allProducts)


  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(addTransactionThunk())

  }, [])

  const cartClick = () => {
    setVisible(!visible)
    navigate('/cart')
  }

  const searchBar = useRef(null)

  return (
    <>
      <Grid columns={1}>
        <Grid.Column>
          <header className="header">
            <Nav setSideBar={[visible, setVisible]} searchBarRef={searchBar} />
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
              <Menu.Item as="a" onClick={() => { searchBar.current.focus(), setVisible(!visible) }}>
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
                    🔥 HOTPICKS 🔥 <Checkbox onClick={() => { dispatch(filters({ key: 'hot_pick', value: 1 })) }}/>
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
                        <Route path='/success' element={<Success/>}/>
                        <Route path='/adminquestion' element = {<QuestionAdmin/>}/>
                        <Route path='/admin' element = {<Admin />}/>
                      </Routes>
                      <Footer />
                    </section>
                  </Segment>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </Grid.Column>
          </Grid>
        </>
  )
}


export default App
