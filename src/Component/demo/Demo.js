import { Container } from '@mui/material'
import React from 'react'
import Header from './Header'
import MyProducts from './Products'
import Footer from './Footer'

export default function Demo() {
  return (
    <>
        <Header />
        <Container sx={{marginBottom: '40px'}}>
            <MyProducts />
        </Container>
        <Footer />
    </>
  )
}
