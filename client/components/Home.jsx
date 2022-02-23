import React, { useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { addAllShoesThunk } from '../actions/shoes'

function Home () {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addAllShoesThunk())
  }, [])

  const allShoes = useSelector(state => state.allShoes)
  console.log(allShoes)

  return (
    <>
    <h2>Home</h2>
    </>
  )
}

export default Home