import React from 'react'
import { Grid, Checkbox, GridRow, GridColumn } from 'semantic-ui-react'

function FilterSortBy() {

  return (
    <>
    <Grid columns={2}>
      <GridRow>
        <GridColumn width={2}>
          <h3 className='sideBar-h3'>SORT BY </h3>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <Checkbox/>  - Price Ascending  
        </GridColumn>
        <GridColumn>
          <Checkbox/> - Price Descending
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <Checkbox/> - Newest   
        </GridColumn>
        <GridColumn>
          <Checkbox/> - Oldest  
        </GridColumn>
      </GridRow>

    </Grid>
    </>
  )

}

export default FilterSortBy