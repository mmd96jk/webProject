import React, { useEffect } from 'react'
import { useMemo } from 'react'
import { memo } from 'react'
import { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Footer from '../../Compoents/Footer/Footer'
import Navbar from '../../Compoents/Navbar/Navbar'
import ProductDetail from '../../Compoents/ProductBox/ProductDetail'
import './UserCart.css'

export default function UserCart() {

    const [productCart, setProductCart] = useState([])
    useEffect(() => {
         fetch('http://localhost:3001/carts')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProductCart(data)
        })
    }, [])



    return (
        <>
            <Container>
                <Navbar />
                <Row className='ProductWapper'>
                    {productCart.map(product => (
                        <ProductDetail id={product.id} img={product.img} title={product.title} desc={product.desc} price={product.price} />
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    )
}
