import { Container } from '@mui/material'
import React from 'react'
import Header from './Header'
import MyProducts from './Products'


export default function Demo() {
  return (
    <>
        <Header />
        <Container>
            <MyProducts />
        </Container>
    </>
  )
}
