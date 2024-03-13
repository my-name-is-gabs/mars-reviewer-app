import React from 'react'
import Container from '@mui/material/Container'
import Card from '../../components/Card'
import Button from '../../components/Button'
import AddIcon from '@mui/icons-material/Add'

const Homepage = () => {
  return (
    <>
      <Container>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
          <Button className="gradient-color-primary p-4 h-24 w-auto text-white text-xl font-semibold rounded-md hover:scale-105 transition-all ease-in-out">
            <AddIcon style={{ fontSize: '1.875rem', fontWeight: 'bolder' }} />{' '}
            create new set
          </Button>
          <Card>Sample Set new</Card>
          <Card>Sample Set new</Card>
        </div>
      </Container>
    </>
  )
}

export default Homepage
