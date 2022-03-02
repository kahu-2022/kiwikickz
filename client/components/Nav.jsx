import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Menu, Icon, Input, Header, Search, Grid, Segment } from 'semantic-ui-react'
import _ from 'lodash'

//helper function to format the Prices in the pop-up cards

function amount(price, min, max, dec, symbol) {

  min = min || 0;
  max = max || 1000;
  dec = dec === undefined ? 2 : dec;
  symbol = symbol || '';

  return symbol + price.toFixed(dec);
};

let source = ""

const initialState = {
  loading: false,
  results: [],
  value: '',
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }

    default:
      throw new Error()
  }
}

function Nav(props) {

  const navigate = useNavigate()
  const allProducts = useSelector(state => state.allProducts)
  const setVis = props.setSideBar[1]
  const vis = props.setSideBar[0]
  const searchBar = props.searchBarRef

  const cartTotal = useSelector(state => state.cartTotal)

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(allProducts)
  }, [allProducts])

  useEffect(() => {

    const productsFormated = products ? products.map(element => {
      
      let returnedItem = {}
  
      if(element.status == "available") {
          returnedItem = {
          title: element.name,
          description: `${element.details}`.substring(0, 30),
          image: `data:image/jpg;base64,${element.image1}`,
          price: amount(element.price, 0, 100, 2, '$'),
          id: element.id
          }
      }
      else if(element.status == "sold") {
          returnedItem = {
          title: element.name,
          description: 'UNAVAILABLE',
          image: `data:image/jpg;base64,${element.image1}`,
          price: <Header as='h5' color='red'>ITEM SOLD</Header>,//amount(element.price, 0, 100, 2, '$'),
          id: element.id
          }
      }
      return returnedItem
    }) : null
    source = productsFormated
  }, [products])



  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef()

  //Search Change area - Where Search find and render of card logic is located

  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.title)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      })
    }, 300)
  }, [])

  // Reload of the page and clearTimeout
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <>
      <Menu>
        <Menu.Item>
          <Icon name='sidebar' onClick={() => setVis(!vis)} />
        </Menu.Item>
        <Menu.Item>
          <Link to='/'>
            <Header as='h1' textAlign='center'>KIWIKICKZ</Header>
          </Link>
        </Menu.Item>

        {/* Add the Search Functionality here */}

        {/* ORIGINAL MENU BUTTON - <Menu.Item position='right'>
        <Input icon='search' placeholder='Search...' name = 'search-bar' ref={searchBar}/>
      </Menu.Item> */}

        <Menu.Item position='right'>
          <Search
            loading={loading}
            placeholder='Search...'
            onResultSelect={(e, data) => {
              dispatch({ type: 'UPDATE_SELECTION', selection: data.result.id })
              navigate(`/product/${data.result.id}`)
              dispatch({ type: 'CLEAN_QUERY' })
              }
            }
            onSearchChange={handleSearchChange}
            results={results}
            value={value}
          />
        </Menu.Item>

        <Menu.Item>
          <Link to='/about' className='link' ref={searchBar}>
            About
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/cart' className='link'>
            <Icon name='cart' /> $ {cartTotal}
          </Link>
        </Menu.Item>
        <Menu.Item >
          Login
        </Menu.Item>
        <Menu.Item>
          Register
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Nav