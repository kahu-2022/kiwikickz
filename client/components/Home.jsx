import React, { useEffect, useState} from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { getAllShoesThunk } from '../actions/shoes'

function Home () {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllShoesThunk())
  }, [])

  // const [filterAllShoesArr, setFilterAllShoesArr ] = useState([])
  const [hotPicks, setHotPicks ] = useState(true)

  // All shoes form state
  const allShoes = useSelector(state => state.allShoes)

//  setFilterAllShoesArr(allShoes)

  console.log(allShoes)

  // Filter Functionality
  // I think we should filter and set such state here and then on apply filters we set a global filtered state

  // const hotPicks = allShoesArr.map(shoe => shoe.hot_pick === true)

  return (
    <>
    <h2>Home</h2>

    {/* Search functionality immplemented here */}
    {/* Filter entire Array for all different key value pairs, then remove any repeats and then format for displaying search boxes */}


    {/* Ternary here sets initial display as hot picks */}
    {/* {hotPicks ? renders hotpics : renders search functionality} */}
    {/* Cards Section where we map over the filtered array*/}
    </>
  )
}

export default Home