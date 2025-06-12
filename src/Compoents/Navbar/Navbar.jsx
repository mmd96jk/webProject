import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navbar.css'
import { FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import MainContext from '../../context/MainContext';
import { BiLogOut } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";


export default function Navbar() {
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
            <Container>
                <Row className="navbar">
                    <Col md="4">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="navbarTitle">
                                <FaShoppingBag className='iconStyle' /> <h1>فروشگاه</h1>
                            </div>
                        </motion.div>
                    </Col>
                    <Col md="8">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <nav className='nav'>
                                <ul className='navbarList'>
                                    <li><Link to='/'>صفحه اصلی</Link></li>
                                    <li><Link to='/products'>محصولات</Link></li>
                                    <li><Link to='/categories'>دسته بندی ها</Link>
                                        <ul>
                                            <li><Link></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to='/about'>درباره ما</Link></li>
                                    <li>
                                        <input type="text" placeholder='search' />
                                    </li>
                                    <li>
                                        {
                                            contextValue.isLoggedIn ? (<p className='userInfosNavbar'>{contextValue.userInfos.fullName}  <BiLogOut className='mr-4 fs-4 text-green-800' onClick={logOutHandler} /></p>) :
                                                (<p><Link to="/login">وارد شوید</Link> / <Link to="/signup">ثبت نام</Link> </p>)
                                        }
                                    </li>
                                    <li>
                                        <Link to='/cart'> <FaCartShopping className='iconStyle' onClick={showCart} /> </Link>
                                    </li>
                                </ul>
                            </nav>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            {/* <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </>
    )
}
