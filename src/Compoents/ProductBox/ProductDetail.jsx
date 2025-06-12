import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './ProductDetail.css'

export default function ProductDetail(props) {
    useEffect(() => {
        console.log(props)
    })


    return (
        <Col className="productDetali" md='5'>
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="productDetailImg">
                    <img src={props.img[0]} alt="img" />
                </div>
                <div className="productDetailInfo">

                    <div className="productDetailTitle">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="productDetailDecs">
                        <p>{props.desc}</p>
                    </div>
                    <div className="productDetailPrice">
                        <span>{props.price}تومان</span>
                    </div>
                </div>
                <div className="productDetailBtn">
                    <button>تکمیل فرایند خرید</button>
                </div>
            </motion.div >
        </Col>
    )
}
