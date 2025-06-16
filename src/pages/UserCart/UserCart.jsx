import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductDetail from '../../Compoents/ProductBox/ProductDetail'
import swal from 'sweetalert'
import { motion } from 'framer-motion'
import './UserCart.css'

export default function UserCart() {

    const [productCart, setProductCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        getAllProductCart()
    }, [])

    const getAllProductCart = async () => {
        await fetch('http://localhost:3001/carts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProductCart(data)
                const totalPriceVar = data.reduce((sum, item) => sum + item.price, 0)
                setTotalPrice(totalPriceVar)
            })

    }

    const removeProduct = (ID) => {
        swal({
            title: "ایا از حذف اطمینان دارید ؟",
            icon: "warning",
            buttons: ['No', 'Yes']
        }).then(result => {
            if (result) {
                fetch(`http://localhost:3001/carts/${ID}`, {
                    method: 'DELETE'
                })
                    .then(res => {
                        console.log(res)
                        if (res.ok) {
                            swal({
                                title: 'با موفقیت حذف شد',
                                icon: 'success',
                                buttons: 'OK'
                            }).then(() => getAllProductCart())
                        }
                    })
            }
        })
    }



    return (
        <>
            <Container>
                <Row className='ProductWapper'>
                    {productCart.map(product => (
                        <ProductDetail id={product.id} img={product.img} title={product.title} desc={product.desc} price={product.price} deleteProduct={() => removeProduct(product.id)} />
                    ))}
                </Row>
                <Row className='userCartPrice'>
                    <table className='userCartTable'>
                        <thead>
                            <tr>
                                <th className='userCartHeadItem'>شناسه</th>
                                <th className='userCartHeadItem'>نام محصول</th>
                                <th className='userCartHeadItem'>قیمت محصول</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productCart.map((product, index) => (
                                <tr>
                                    <td className='userCartBodyItem'>{index + 1}</td>
                                    <td className='userCartBodyItem'>{product.title}</td>
                                    <td className='userCartBodyItem'>{product.price}</td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                    <div className="userCartTotalPrice">
                        <span>مجموع قیمت :</span>
                        {totalPrice}
                    </div>
                    <div className="userCartBtn">
                        <button>تکمیل فرایند خرید</button>
                    </div>
                </Row>
            </Container>
        </>
    )
}
