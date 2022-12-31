import React from 'react'
import { Row, Col } from 'reactstrap'
import Image1 from "../assets/images/social-media.png"
import Image2 from "../assets/images/paid.png"
import Image3 from "../assets/images/email.png"
import Image4 from "../assets/images/seo.png"

const Services = () => {
    return (
        <section id="#service">
            <Row className='align-items-center py-5'>
                <Col lg="5" className='ps-0 pe-5'>
                    <span className='service-btn text-secondary p-2'>
                        SERVICES
                    </span>
                    <h2 className='my-4'>Services we offer</h2>
                    <p className='text-secondary ff-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
                    <div className='mt-4 d-flex'>
                        <button className="btn-primary text-white py-2 px-4 me-3">All Services</button>
                    </div>
                </Col>
                <Col lg="7" className='d-flex justify-content-between mt-4 mt-lg-0'>
                    <Row className='service-section' data-aos="zoom-in-up">
                        <Col lg="6" sm="6" className='mt-lg-4 ps-0'>
                            <div className='bg-service p-3'>
                                <img src={Image1} alt="Social Media Marketing" className='img-fluid' />
                                <h5 className='text-white mt-2'>Social Media Marketing</h5>
                                <p className='text-secondary pe-md--5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.</p>
                            </div>
                            <div className='bg-service mt-4 p-3'>
                                <img src={Image3} alt="Email Marketing" className='img-fluid' />
                                <h5 className='text-white mt-2'>Email Marketing</h5>
                                <p className='text-secondary pe-md-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.</p>
                            </div>
                        </Col>
                        <Col lg="6" sm="6" className='ps-0'>
                            <div className='bg-service p-3 mt-4 mt-sm-0'>
                                <img src={Image2} alt="Paid Advertising" className='img-fluid' />
                                <h5 className='text-white mt-2'>Paid Advertising</h5>
                                <p className='text-secondary pe-md-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.</p>
                            </div>
                            <div className='bg-service mt-4 p-3'>
                                <img src={Image4} alt="SEO Optimization" className='img-fluid' />
                                <h5 className='text-white mt-2'>SEO Optimization</h5>
                                <p className='text-secondary pe-md-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default Services