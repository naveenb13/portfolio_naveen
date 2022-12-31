import React from 'react'
import { Row, Col } from 'reactstrap'
import Image1 from "../assets/images/john.png"
import Image2 from "../assets/images/alice.png"
import Image3 from "../assets/images/sophia.png"
import { AiFillStar } from 'react-icons/ai'

const Clients = () => {

    const clients = [
        {
            image: Image1,
            name: "John Doe",
            title: '"I recommend this agency"'

        },
        {
            image: Image2,
            name: "Alice Smith",
            title: '"The support is awesome"'

        },
        {
            image: Image3,
            name: "Sophia Miller",
            title: '“A game changer for us”'

        }
    ]
    return (
        <section>
            <span className='service-btn text-secondary p-2 text-uppercase'>
                testimonials
            </span>
            <Row className='justify-content-center'>
                <Col lg="8">
                    <h2 className='my-4'>See what our clients say</h2>
                    <p className='text-secondary ff-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.</p>
                </Col>
                <Col lg="4" className='align-self-end text-end'>
                    <button className="btn-primary text-white py-2 px-4 me-3">Get in touch</button>
                </Col>
            </Row>
            <Row className='align-items-center py-5 client-section'>
                {clients.map((item, i) => (
                    <Col lg="4" md="4" className='mt-4 mt-md-0'>
                        <div className='bg-service py-5 px-4'>
                            <div className='d-flex flex-md-column flex-lg-row align-items-center'>
                                <img src={item.image} alt={`client-${i}`} />
                                <div className='ms-2 text-center'>
                                    <p className='text-white mb-0'>{item.name}</p>
                                    <p className='text-secondary'>Company Name</p>
                                </div>
                            </div>
                            <h3 className='text-white ff-reg my-3'>{item.title}</h3>
                            <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.</p>
                            <div>
                                {[1, 2, 3, 4, 5].map(() => (
                                    <AiFillStar color='#ffc54f' />
                                ))}
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </section>
    )
}

export default Clients