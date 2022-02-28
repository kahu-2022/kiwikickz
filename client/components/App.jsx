import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Cart from "./Cart"
import Home from "./Home"
import Product from "./Product"
import AddProduct from "./AddProduct"
import Nav from "./Nav"
import Footer from "./Footer"
import About from './About'

import {
  Icon,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar,
  GridColumn,
} from "semantic-ui-react"

function App() {
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <Grid columns={1} >
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
              <Menu.Item as="a">
                <Icon name="home" />
                Home
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="gamepad" />
                Games
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="camera" />
                Channels
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
