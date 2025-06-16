import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Productbox from '../../Compoents/ProductBox/ProductBox'
import { Container, Row } from 'react-bootstrap'

export default function Category() {
    const [products, setProducts] = useState([])
    const { url } = useParams()

    useEffect(() => {
        console.log(url)

        fetch(`https://dummyjson.com/products/category/${url}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.products)
                setProducts(data.products)
            })
    }, [])

    return (
        <>
            <Container>
                <Row>
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
