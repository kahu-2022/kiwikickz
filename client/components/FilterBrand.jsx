import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid, Checkbox, GridRow, GridColumn } from 'semantic-ui-react'
import { filters } from '../actions/products'

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
            <Checkbox onClick={() => { dispatch(filters({key: 'brand', value: 'Nike'})) }}/>  - NIKE   
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'brand', value: 'Adidas' })) }}/> - ADIDAS  
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'brand', value: 'Yeezy' })) }}/>  - YEEZY  
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'brand', value: 'Nb' })) }}/> - NB   
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'brand', value: 'Reebok' })) }}/> - REEBOK  
        </GridColumn>
        <GridColumn>
            <Checkbox onClick={() => { dispatch(filters({ key: 'brand', value: 'Vans' })) }}/> - VANS  
        </GridColumn>
      </GridRow>

    </Grid>
    </>
  )

}

export default FilterBrand