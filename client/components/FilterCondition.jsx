import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid, Checkbox, GridRow, GridColumn } from 'semantic-ui-react'
import { filters } from '../actions/products'

function FilterCondition() {
  const dispatch = useDispatch()

  return (
    <Grid columns={3}>
      <GridRow>
      <GridColumn width={3}>
      <h3 className='sideBar-h3'>CONDITION </h3>
      </GridColumn>
      </GridRow>
      <GridRow>
      <GridColumn>
          <Checkbox onClick={() => { dispatch(filters({ key: 'condition', value: 'New' })) }}/> NEW
      </GridColumn>
      <GridColumn>
          <Checkbox onClick={() => { dispatch(filters({ key: 'condition', value: 'Used' })) }}/> USED
      </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default FilterCondition