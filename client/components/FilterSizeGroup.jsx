import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid , Container, Checkbox, GridRow, GridColumn, Header, Radio } from 'semantic-ui-react'

function FilterSizeGroup() {

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
            <Checkbox onClick={() => { dispatch(filters({ key: 'gender', value: 'Male' })) }}/> - MEN  
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'gender', value: 'Female' })) }}/> - WOMEN 
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'gender', value: 'Youth' })) }}/> - YOUTH  
        </GridColumn>
      </GridRow>

    </Grid>
    </>
  )

}

export default FilterSizeGroup