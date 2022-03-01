import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid , Container, Checkbox, GridRow, GridColumn, Header, Radio } from 'semantic-ui-react'

function FilterPrice() {
  const dispatch = useDispatch()

  return (
    <Grid columns={1}>
      <GridColumn>
      <h3 className='sideBar-h3'>PRICE </h3>
      </GridColumn>
      <GridColumn>
        <Checkbox/> {`$100 & Under`}
      </GridColumn>
      <GridColumn>
        <Checkbox/> {`$100 - $150`}
      </GridColumn>
      <GridColumn>
        <Checkbox/> {`$150 - 200`}
      </GridColumn>
      <GridColumn>
        <Checkbox/> {`$200 - $250`}
      </GridColumn>
      <GridColumn>
        <Checkbox/> {`$300 & Over`}
      </GridColumn>

    </Grid>
  )
}

export default FilterPrice