import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid, Container, Checkbox, GridRow, GridColumn, Header, Radio } from 'semantic-ui-react'
import { filters } from '../actions/products'


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
            <Checkbox onClick={() => { dispatch(filters({ key: 'gender', value: 'Male' })) }}/> - MEN  
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'gender', value: 'Female' })) }}/> - WOMEN 
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'gender', value: 'Youth' })) }}/> - YOUTH  
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'size', min: 0, max: 6 })) }}/> - {`< 6`} 
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'size', min: 6, max: 6.5 })) }}/> - 6 - 6.5
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'size', min: 7, max: 7.5 })) }}/> - 7 - 7.5  
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'size', min: 8, max: 8.5 })) }}/> - 8 - 8.5
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'size', min: 9, max: 9.5 })) }}/> - 9 - 9.5
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'size', min: 10, max: 10.5 })) }}/> - 10 - 10.5  
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'size', min: 11, max: 11.5 })) }}/> - 11 - 11.5
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'size', min: 12, max: 12.5 })) }}/> - 12 - 12.5
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'size', min: 13, max: 24 })) }}/> - {`< 13`} 
        </GridColumn>
      </GridRow>
      

    </Grid>
    </>
  )

}

export default FilterSize