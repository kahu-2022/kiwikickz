import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid, Container, Checkbox, GridRow, GridColumn, Header, Radio } from 'semantic-ui-react'
import { filters } from '../actions/products'


function FilterPrice() {
  const dispatch = useDispatch()

  return (
    <Grid columns={1}>
      <GridColumn>
      <h3 className='sideBar-h3'>PRICE </h3>
      </GridColumn>
      <GridColumn>
        <Checkbox onClick={() => { dispatch(filters({ key: 'price', min: 0, max: 100 })) }}/> {`$100 & Under`}
      </GridColumn>
      <GridColumn>
        <Checkbox onClick={() => { dispatch(filters({ key: 'price', min: 100, max: 150 })) }}/> {`$100 - $150`}
      </GridColumn>
      <GridColumn>
        <Checkbox onClick={() => { dispatch(filters({ key: 'price', min: 150, max: 200 })) }}/> {`$150 - 200`}
      </GridColumn>
      <GridColumn>
        <Checkbox onClick={() => { dispatch(filters({ key: 'price', min: 200, max: 250 })) }}/> {`$200 - $250`}
      </GridColumn>
      <GridColumn>
        <Checkbox onClick={() => { dispatch(filters({ key: 'price', min: 300, max: 9999 })) }}/> {`$300 & Over`}
      </GridColumn>

    </Grid>
  )
}

export default FilterPrice