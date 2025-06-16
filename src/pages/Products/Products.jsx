import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Productbox from '../../Compoents/ProductBox/ProductBox'
import './Products.css'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then(res => res.json())
      .then(data => {
        console.log(data.products)
        setProducts(data.products)
      })
  }, [])

  return (
    <>
      <Container>
        <Row className='ProductWapper'>
          {
            products.map(product => (
              <Productbox id={product.id} Img={product.images} title={product.title} desc={product.description} price={product.price} />
            ))
          }
        </Row>
      </Container>
    </>
  )
}
