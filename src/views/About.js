import React from 'react'
import { Row, Col } from 'reactstrap'
import Image1 from "../assets/images/about.png"
import { BsCheck2 } from "react-icons/bs"

const About = () => {
    return (
      <div className="about-container" id='about'>
        <div className="container">
          <section>
            <Row className="align-items-center justify-content-center py-5">
              <Col lg="6" md="12" xs="12" sm="12">
                <img
                  src={Image1}
                  className="img-fluid"
                  alt="choose-left"
                />
              </Col>
              <Col lg="6" className="ps-0 pe-sm-5 mt-5 mt-lg-0">
                <span className="service-btn text-secondary p-2">About Me</span>
                <h2 className="my-4">ABOUT ME</h2>
                <p className="text-secondary ff-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor.
                </p>
                {[1, 2, 3, 4].map(() => (
                  <div className="mt-4 d-flex align-items-center">
                    <div className="bg-check">
                      <BsCheck2 color="#5CC97B" />
                    </div>
                    <p className="text-secondary ff-light mb-0 ms-2">
                      This is some text inside of a div.
                    </p>
                  </div>
                ))}
              </Col>
            </Row>
          </section>
        </div>
      </div>
    );
}

export default About