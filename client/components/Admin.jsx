import React from 'react'
import { Container, Card } from 'semantic-ui-react'

function Admin () {

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