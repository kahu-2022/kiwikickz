import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid , Container, Checkbox, GridRow, GridColumn, Header, Radio } from 'semantic-ui-react'

function FilterBrand() {

  const dispatch = useDispatch()

  return (
    <>
    <Grid columns={3}>
      <GridRow>
        <GridColumn width={3}>
          <h3 className='sideBar-h3'>BRANDS </h3>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <Checkbox/>  - NIKE   
        </GridColumn>
        <GridColumn>
          <Checkbox/> - ADIDAS  
        </GridColumn>
        <GridColumn>
          <Checkbox/>  - YEEZY  
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <Checkbox/> - NB   
        </GridColumn>
        <GridColumn>
          <Checkbox/> - REEBOK  
        </GridColumn>
        <GridColumn>
          <Checkbox/> - VANS  
        </GridColumn>
      </GridRow>

    </Grid>
    </>
  )

}

export default FilterBrand