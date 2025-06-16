import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'
import './ProductBox.css'

export default function ProductBox({ id, Img, title, desc, price }) {
  const value = useParams()
  const [product, setProduct] = useState([])

  const addToCart = async (id, Img, title, desc, price) => {

    const res = await fetch('http://localhost:3001/carts')
    const cartItems = await res.json()
    const exists = cartItems.some(item => item.id == id)
    console.log(exists)
    if (exists) {
      swal({
        title: 'این محصول قبلا در سبد خرید وجود داشته است',
        icon: 'warning',
        buttons: 'ok'
      })
      return
    } else {
      const newCartItem = {
        id: id,
        img: Img,
        title: title,
        desc: desc,
        price: price,
      }

      fetch('http://localhost:3001/carts', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newCartItem)
      }).then(res => {
        if(res.ok) {
          res.json()
          swal({
            title: 'این محصول با موفقیت اضافه شد',
            icon: 'success',
            buttons: "ok"
          })
        }
      })
        .then(data => {
          console.log(data)
        })
    }
  }

  return (
    <Col xs="12" md="3" style={{ height: '23rem' }}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="productCard">
          <div className="prosuctImg">
            <img src={Img[0]} alt="" />
          </div>
          <div className="productInfo">
            <div className="productName">
              <h2>{title.slice(0, 36)}</h2>
            </div>
            <div className="productPrice">
              <span>{price}تومان</span>
            </div>
            <div className="productBtn">
              <button onClick={() => addToCart(id, Img, title, desc, price)}>افزودن به سبد خرید</button>
            </div>
          </div>
        </div>
      </motion.div>
    </Col >
  )
}
