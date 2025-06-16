import React from 'react'
import Header from '../../Compoents/Header/Header'
import FeaturedProducts from '../../Compoents/FeaturedProducts/FeaturedProducts'
import { Container } from 'react-bootstrap'
import './IndexApp.css'

export default function IndexApp() {
  return (
    <>
      <Container className='relative z-0'>
        <Header />
        <FeaturedProducts />
      </Container>
    </>
  )
}
