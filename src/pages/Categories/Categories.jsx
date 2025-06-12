import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../../Compoents/Navbar/Navbar'
import CategoryBox from '../../Compoents/CategoryBox/CategoryBox'
import { Link } from 'react-router-dom'
import Footer from '../../Compoents/Footer/Footer'
import { motion } from 'framer-motion'
import './Categories.css'

export default function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCategories(data)
      })
  }, [])

  return (
    <>
      <Container>
        <Navbar />
        <Row>
          {categories.map(category => (
            <Col xs="12" md="3">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>

                <CategoryBox title={category.name}>
                  <Link to={`/categories/${category.slug}`}>محصولات این دسته بندی</Link>
                </CategoryBox>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}
