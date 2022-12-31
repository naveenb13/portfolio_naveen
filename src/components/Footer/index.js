import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Nav, NavItem, Input } from 'reactstrap'
import logo from "../../assets/images/logo.gif";
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <section>
            <Row className='justify-content-center'>
                <Col lg="4" md="6">
                    <img src={logo} alt="luminous" className='img-fluid' />
                    <p className='text-secondary ff-light mt-3 pe-4'>Growfy is a template highly suitable for modern marketing agencies, digital studios, startups and businesses. The design is made in the dark style, which makes the site memorable and you can easily adapt it to your brand.</p>
                    <div className='d-flex justify-content-start'>
                        <div className='social-div p-1 text-center'>
                            <FaLinkedin color='#75757F' />
                        </div>
                        <div className='social-div p-1 text-center'>
                            <FaTwitter color='#75757F' />
                        </div>
                        <div className='social-div p-1 text-center'>
                            <FaFacebook color='#75757F' />
                        </div>
                        <div className='social-div p-1 text-center'>
                            <FaYoutube color='#75757F' />
                        </div>
                        <div className='social-div p-1 text-center'>
                            <FaInstagram color='#75757F' />
                        </div>
                    </div>
                </Col>
                <Col lg="2" md="3" sm="6" xs="6" className='mt-4 mt-md-0'>
                    <h5 className='text-white ff-med'>Pages</h5>
                    <Nav className="d-flex flex-column">
                        <NavItem className='my-2'>
                            <Link className='text-secondary ff-light'>Home</Link>
                        </NavItem>
                        <NavItem className='my-2'>
                            <Link className='text-secondary ff-light'>About</Link>
                        </NavItem>
                        <NavItem className='my-2'>
                            <Link className='text-secondary ff-light'>Services</Link>
                        </NavItem>
                        <NavItem className='my-2'>
                            <Link className='text-secondary ff-light'>Packages</Link>
                        </NavItem>
                        <NavItem className='my-2'>
                            <Link className='text-secondary ff-light'>Blog</Link>
                        </NavItem>
                        <NavItem className='my-2'>
                            <Link className='text-secondary'>Contact</Link>
                        </NavItem>
                    </Nav>
                </Col>
                <Col lg="2" md="3" sm="6" xs="6" className='mt-4 mt-md-0'>
                    <h5 className='text-white ff-med'>Utility Pages</h5>
                    <Nav className="d-flex flex-column">
                        <NavItem className='my-2'>
                            <Link className='text-secondary ff-light'>Instructions</Link>
                        </NavItem>
                        <NavItem className='my-2'>
                            <Link className='text-secondary ff-light'>Style guide</Link>
                        </NavItem>
                        <NavItem className='my-2'>
                            <Link className='text-secondary ff-light'>Licenses</Link>
                        </NavItem>
                        <NavItem className='my-2'>
                            <Link className='text-secondary ff-light'>Changelog</Link>
                        </NavItem>
                        <NavItem className='my-2'>
                            <Link className='text-secondary ff-light'>404 Not found</Link>
                        </NavItem>
                        <NavItem className='my-2'>
                            <Link className='text-secondary'>Password protected</Link>
                        </NavItem>
                    </Nav>
                </Col>
                <Col lg="4" className='mt-4 mt-lg-0'>
                    <h5 className='text-white ff-med'>Subscribe to our newsletter</h5>
                    <p className='text-secondary ff-light'>Lorem ipsum dolor sit am consectetur adipiscing</p>
                    <div className='d-flex flex-column flex-sm-row align-items-start align-items-sm-center'>
                        <Input placeholder='Enter your email' className='bg-transparent me-sm-2 text-white'></Input>
                        <button className="btn-primary text-white py-2 px-4 mt-3 mt-sm-0">Subscribe</button>
                    </div>
                </Col>

            </Row>
        </section>
    )
}

export default Footer