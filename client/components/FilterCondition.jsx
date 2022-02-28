import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid , Container, Checkbox, GridRow, GridColumn, Header, Radio } from 'semantic-ui-react'

function FilterCondition() {
  const dispatch = useDispatch()

  return (
    <Grid columns={2}>
      <GridRow>
      <GridColumn width={2}>
      <h3 className='sideBar-h3'>CONDITION </h3>
      </GridColumn>
      </GridRow>
      <GridRow>
      <GridColumn>
        <Checkbox/> NEW
      </GridColumn>
      <GridColumn>
        <Checkbox/> USED
      </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default FilterCondition