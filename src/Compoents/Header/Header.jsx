import React from 'react'
import CategoryBox from '../CategoryBox/CategoryBox'
import './Header.css'
import { BiSolidTShirt } from "react-icons/bi";
import { GiConverseShoe } from "react-icons/gi";
import { IoBagHandle } from "react-icons/io5";
import { motion } from "framer-motion"
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <div className="headerTitleWapper">
          <div className="headerTitle">
            <h1>تخفیف برای فصل بهار تا %50</h1>
          </div>
          <div className="headerBtn">
            <button>خرید</button>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <Row className="categoryBoxWapper">
          <Col xs="12" md="3">
            <Link to="categories/mens-shirts">
              <CategoryBox title="لباس ها">
                <BiSolidTShirt className='iconBox' />
              </CategoryBox>
            </Link>
          </Col>
          <Col xs="12" md="3">
            <Link to="categories/mens-shoes">
              <CategoryBox title="کفش ها">
                <GiConverseShoe className='iconBox' />
              </CategoryBox>
            </Link>
          </Col>
          <Col xs="12" md="3">
            <Link to="categories/mobile-accessories">
              <CategoryBox title="اکسسوری ها">
                <IoBagHandle className='iconBox' />
              </CategoryBox>
            </Link>
          </Col>
        </Row>
      </motion.div>
    </>
  )
}
