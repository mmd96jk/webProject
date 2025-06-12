import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import './ProductBox.css'

export default function ProductBox({id , Img ,title, desc , price }) {

  
  const value = useParams()

  const addToCart = (id , Img, title, desc , price) => {
    // console.log(images , src , title , price)
    console.log(value);

    const  newCartItem = {
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
    }).then(res => res.json())
    .then(data => {
      console.log(data)
    })
    
  }

  return (
    <Col xs="12" md="3" style={{height: '23rem'}}>
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
              <h2>{title.slice(0,36)}</h2>
            </div>
            <div className="productPrice">
              <span>{price}تومان</span>
            </div>
            <div className="productBtn">
              <button onClick={() => addToCart(id , Img , title, desc , price)}>افزودن به سبد خرید</button>
            </div>
          </div>
        </div>
      </motion.div>
    </Col >
  )
}
