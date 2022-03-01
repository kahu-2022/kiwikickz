import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux'
import{ Menu, Icon , Input, Header, Search, Grid, Segment } from 'semantic-ui-react'
import _ from 'lodash'

//helper function to format the Prices in the pop-up cards

function amount (price, min, max, dec, symbol) {

  min = min || 0;
  max = max || 1000;
  dec = dec === undefined ? 2 : dec;
  symbol = symbol || '';
  // var randValue = faker.random.number({ max: max, min: min, precision: Math.pow(10, -dec) });

  return symbol + price.toFixed(dec);
};

const source = [{
  title: "Jordan 1 Retro High",
  description: `Jordan Brand connected with Parisian fashion house Dior to create history with the Jordan 1 Retro High Dior, now available on StockX. This is the first time that Jordan has collaborated with a legacy fashion label like Dior, making this release one for the books. This release was limited to only 8,500 pairs, each pair individually numbered.`.substring(0,30),
  image: "/productimages/jordanretro/retro1.jpeg",
  price: amount(8000, 0, 100, 2, '$'),
},
{
  title: "AIR JORDAN 1 MID 'ARMORY NAVY'",
  description: `The Jordan 1 Mid Armory Navy features a white leather upper with dark navy overlays and Swooshes. At the ankle, black leather collars add a subtle contrast to the overlays. A Jordan Wings logo at the ankle and Jumpman woven label on the tongue complete the design.`.substring(0,30),
  image: "/productimages/armoryNavy/armory3.jpeg",
  price: amount(275, 0, 100, 2, '$'),
},
{
  title: "AIR JORDAN 1 MID SE 'CRIMSON TINT'",
  description: `PUSHAS checks each pair of sneakers and guarantees every pair is authentic. We also verify all Australian Resellers on the platform.`.substring(0,30),
  image: "/productimages/Crimson/crimson2.jpeg",
  price: amount(422, 0, 100, 2, '$'),
},
{
  title: "ADIDAS YEEZY BOOST 350 V2 CP9652",
  description: `THE YEEZY BOOST 350 V2 'BRED' BRINGS A CLASSIC COLORWAY TO ITS MINIMALIST CONSTRUCTION. THE SHOE'S UPPER IS BUILT WITH PRIMEKNIT, FINISHED IN BLACK AND HIGHLIGHTED BY THE SPLY-350 BRANDING ON THE SIDE WALL. MORE RED MARKS THE HEEL PULL-LOOP, WHILE ROPE LACES SECURE THE FIT. UNDERFOOT, A FULL-LENGTH BOOST MIDSOLE WRAPPED IN A BLACK RUBBER CAGE PROVIDES CUSHIONING. A RUBBER OUTSOLE WITH CUTOUTS PROVIDES TRACTION. SKU: CP9652 RELEASE DATE: 2 NOV 2017 COLOR: CORE BLACK/CORE BLACK/RED`.substring(0,30),
  image: "/productimages/yeezy350/ye1.jpeg",
  price: amount(470, 0, 100, 2, '$'),
},
{
  title: "NIKE AIR JORDAN 1 MID CHICAGO 554724-173",
  description: `DRESSED IN THE "CHICAGO" COLOR SCHEME, THIS ITERATION OF THE NIKE AIR JORDAN 1 MID FEATURES THE SIGNATURE COLOR-BLOCKING OF WHITE, BLACK AND GYM RED. ON THE WHITE LEATHER UPPER ARE RED OVERLAYS AND BLACK DETAILING, WITH AN UNCONVENTIONAL WHITE HEEL.`.substring(0,30),
  image: "/productimages/jordanchicago/chicago1.jpeg",
  price: amount(270, 0, 100, 2, '$'),
},
]

console.log(source)

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
      console.log(state)
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

  const dispatch1 = useDispatch()
  const allProducts = useSelector(state => state.allProducts)

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(allProducts)
  },[allProducts])

  useEffect(() => {
  console.log(products)
  },[products])
  
  
  const handleClick = (e) => {
    console.log(e)
  }

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
      const isMatch = (result) => re.test(result.name)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(products, isMatch),
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
        <Icon name='sidebar'/>
      </Menu.Item>
      <Menu.Item>
      <Link to='/'>
        <Header as = 'h1' textAlign='center'>KIWIKICKZ</Header>
        </Link>
      </Menu.Item>

      {/* Add the Search Functionality here */}
      <Menu.Item position='right'>
        {/* <Input icon={{ name: 'search', circular: true, link: true, onClick: handleClick}}
        placeholder='Search...' /> */}
        <Search
          loading={loading}
          placeholder='Search...'
          onResultSelect={(e, data) =>
            dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
          }
          onSearchChange={handleSearchChange}
          results={results}
          value={value}
        />
      </Menu.Item>
          
      <Menu.Item>
        <Link to='/about'>
          About
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/cart'>
      <Icon name='cart'/>
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