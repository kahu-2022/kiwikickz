import React, { useState , useRef } from "react"
import { Routes, Route, Link , useNavigate } from "react-router-dom"
import Cart from './Cart'
import Home from './Home'
import Product from './Product'
import AddProduct from './AddProduct'
import Nav from './Nav'
import Footer from './Footer'
import QuestionAdmin from './QuestionAdmin'
import About from './About'
import Success from './Success'
import SideMenu from './SideMenu'
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
  const navigate = useNavigate()

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
            <Nav vis={visible} setVis={setVisible} searchBar={searchBar} />
          </header>
        </Grid.Column>
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>

            <SideMenu />

            <Sidebar.Pusher>
              <Segment basic>
                <section className="main">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/addproduct" element={<AddProduct />} />
                    <Route path='/about' element={<About/>}/>
                    <Route path='/success' element={<Success />}/>
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
