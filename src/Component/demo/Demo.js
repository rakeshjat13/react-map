import { Container } from '@mui/material'
import React from 'react'
import Cart from './Cart'
import MyProducts from './Products'


export default function Demo() {
  return (
    <>
        <Cart />
        <Container>
            <MyProducts />
        </Container>
    </>
  )
}
