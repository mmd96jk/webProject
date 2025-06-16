import React from 'react'
import './Navbar.css'
import { FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import MainContext from '../../context/MainContext';
import { BiLogOut } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {
    const contextValue = useContext(MainContext)

    const logOutHandler = () => {
        console.log("logout");

        contextValue.logout()
    }

    const showCart = () => {
        console.log("Cart")
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="navbarBrand">
                            <Navbar.Brand href="#">فروشگاه</Navbar.Brand>
                            < FaShoppingBag className="iconStyle" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className='navbarInfoWapper'>
                            <div className="navbarInfo">

                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Link to="/">صفحه اصلی</Link>
                                    <Link to="/products">محصولات</Link>
                                    <Link to="/categories">دسته بندی ها</Link>
                                    <Link to='/about'>درباره ما</Link>

                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                </Form>

                                {
                                    contextValue.isLoggedIn ? (<p className='userInfosNavbar'>{contextValue.userInfos.fullName}  <BiLogOut className='mr-4 fs-4 text-green-800' onClick={logOutHandler} /></p>) :
                                        (<p><Link to="/login">وارد شوید</Link> / <Link to="/signup">ثبت نام</Link> </p>)
                                }
                                <Link to='/cart'> <FaCartShopping className='iconStyle' onClick={showCart} /> </Link>
                            </div>
                        </Navbar.Collapse>
                    </motion.div>
                </Container>
            </Navbar>
        </>
    )
}
