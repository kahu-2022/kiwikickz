import React, { useState  } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Cart from "./Cart"
import Home from "./Home"
import Product from "./Product"
import AddProduct from "./AddProduct"
import Nav from "./Nav"
import Success from './Success'

import Footer from "./Footer"
import About from './About'
import FilterBrand from "./FilterBrand"
import FilterSizeGroup from "./FilterSizeGroup"
import FilterSize from "./FilterSize"
import FilterPrice from "./FilterPrice"
import FilterCondition from "./FilterCondition"
import FilterSortBy from "./FilterSortBy"

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
          <Route path='/about' element = {<About/>}/>
        </Routes>
      <Footer/>
      </section>
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
              <Menu.Item as="a" onClick={() => {setToggleSearch(!toggleSearch)}}>
                <Icon name="search" />
                Search
              </Menu.Item> 
              <Link to='/cart'>
              <Menu.Item onClick={() => {setVisible(!visible)}}>
                <Icon name="cart" />
                Cart
              </Menu.Item>
              </Link>
              <Menu.Item>
                <Icon name="sliders horizontal" />
                Filter
              </Menu.Item>
              <Menu.Item>
              🔥 HOTPICKS 🔥 <Checkbox defaultChecked/> 
              </Menu.Item>
              <Menu.Item>
                <FilterBrand/>
              </Menu.Item>
              <Menu.Item>
                <FilterCondition/>
              </Menu.Item>
              <Menu.Item>
                <FilterPrice/>
              </Menu.Item>
              <Menu.Item>
                <FilterSize/>
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
                    <Route path='/about' element={<About/>}/>
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
