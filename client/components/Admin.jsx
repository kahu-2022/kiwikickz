import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Container, Card, Icon, Image, Grid} from 'semantic-ui-react'

function Admin () {
//   <Grid container columns={1} divided stackable>
// </Grid>
  return (
    <>
    <h2>Admin Page</h2>
      <Container>
        <Card
          href="/addproduct"
          header='Add a Product'
          description='This page allows an admin to add new products to the store'
        />
        <Card
          href="/adminquestion"
          header='Admin Questions and Answers'
          description='This page allows an admin to review and answer questions from buyers'
        />  
      </Container>
    </>
    )
  }
  
  export default Admin