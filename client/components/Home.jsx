import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { getAllShoesThunk } from '../actions/shoes'
import AddProduct from './AddProduct'
import {Grid , Container} from 'semantic-ui-react'

import ShoesContainer from './ShoesContainer'
import ShoeCard from './ShoeCard'

function Home () {

  const allShoes = useSelector(state => state.allShoes)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllShoesThunk())
  }, [])

  const [hotPicks, setHotPicks ] = useState(true)
  const [filters, setFilters ] = useState()

  return (
    <>
    <Container style={{ marginTop: '3em'}}>
    {/* <ShoesContainer data={allShoes}/> */}
    {/* Search functionality immplemented here */}
    {/* Filter entire Array for all different key value pairs, then remove any repeats and then format for displaying search boxes */}

    
      {allShoes.length > 0 ? <ShoesContainer data={allShoes}/> : null}

    </Container>

    {/* Ternary here sets initial display as hot picks */}
    {/* {hotPicks ? renders hotpics : renders search functionality} */}
    {/* Cards Section where we map over the filtered array*/}

    </>
  )
}

export default Home