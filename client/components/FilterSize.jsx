import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid , Container, Checkbox, GridRow, GridColumn, Header, Radio } from 'semantic-ui-react'

function FilterSize() {

  const dispatch = useDispatch()

  return (
    <>
    <Grid columns={3}>
    <GridRow>
        <GridColumn width={3}>
          <h3 className='sideBar-h3'>SIZE </h3>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <Checkbox/> - MEN  
        </GridColumn>
        <GridColumn>
          <Checkbox/> - WOMEN 
        </GridColumn>
        <GridColumn>
          <Checkbox/> - YOUTH  
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <Checkbox/> - {`< 6`} 
        </GridColumn>
        <GridColumn>
          <Checkbox/> - 6 - 6.5
        </GridColumn>
        <GridColumn>
          <Checkbox/> - 7 - 7.5  
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <Checkbox/> - 8 - 8.5
        </GridColumn>
        <GridColumn>
          <Checkbox/> - 9 - 9.5
        </GridColumn>
        <GridColumn>
          <Checkbox/> - 10 - 10.5  
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
          <Checkbox/> - 11 - 1.5
        </GridColumn>
        <GridColumn>
          <Checkbox/> - 12 - 12.5
        </GridColumn>
        <GridColumn>
          <Checkbox/> - {`< 12`} 
        </GridColumn>
      </GridRow>
      

    </Grid>
    </>
  )

}

export default FilterSize