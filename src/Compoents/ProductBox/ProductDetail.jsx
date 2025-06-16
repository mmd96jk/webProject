import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { IoClose } from "react-icons/io5";
import swal from 'sweetalert';
import './ProductDetail.css'

export default function ProductDetail(props) {
    useEffect(() => {
        console.log(props)
    })

    const getAllProductCart = () => {
        fetch('http://localhost:3001/cart')
        .then(res => console.log(res))
    }


    const closeProductDetailAction = (ID) => {
        console.log(ID)
        swal({
            title: "ایا از حذف اطمینان دارید ؟",
            icon: "warning",
            buttons: ['No', 'Yes']
        }).then(result => {
            if(result) {
                fetch(`http://localhost:3001/carts/${ID}`, {
                    method: 'DELETE'
                })
                .then(res => {
                    console.log(res)
                    if(res.ok) {
                        swal({
                            title: 'با موفقیت حذف شد',
                            icon: 'success',
                            buttons:  'OK'
                        }).then(() => getAllProductCart())
                    }
                })
            }
        })
    }

    return (
        <Col className="productDetali" md='5'>
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="productDetailTop">
                    <div className="productDetailImg">
                        <img src={props.img[0]} alt="img" />
                    </div>
                    <div className="productDetailIcon">
                        <button onClick={() => props.deleteProduct()}><IoClose style={{fontSize: "1.6rem"}} /></button>
                    </div>  
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
            </motion.div >
        </Col>
    )
}
