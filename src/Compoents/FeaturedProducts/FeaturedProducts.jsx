import React, { useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import ProductBox from '../ProductBox/ProductBox'
import { Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './FeaturedProducts.css'


export default function FeaturedProducts() {
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
        <div className="featuredProducts">
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <SectionTitle title="محصولات پر فروش" />
            </motion.div>
            <Row className="ProductWapper">
                {products.slice(0,4).map(product => (
                    <ProductBox id={product.id} Img={product.images} title={product.title} desc={product.description} price={product.price} />
                ))}
            </Row>
        </div>
    )
}
