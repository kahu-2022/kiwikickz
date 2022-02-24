import React from 'react'
import { Container, Grid, Box } from '@mui/material'

function Footer() {
  return (
    <Box Box
      position="fixed"
      bottom="0px"
      color="t"
    >
      <Container maxWidth='sm' fixed>
        <Grid container spacing={5}>
          <Grid item xs={20} sm={1}></Grid>
          <Box borderBottom={2}>help me</Box>
        </Grid>x
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          Kiwi Kickz &reg; {new Date().getFullYear()}
        </Box>
      </Container>

    </Box >
  )
}

export default Footer



