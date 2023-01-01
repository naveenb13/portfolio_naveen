import React from 'react'
import { Row, Col } from 'reactstrap'
import Image3 from "../assets/images/image4.gif"
import TextLoop from "react-text-loop";

const Banner = () => {
    return (
      <div className="container" id="home">
        <section>
          <Row className="d-flex justify-content-between align-items-center">
            <Col lg="6" md="7" className="ps-0 pe-sm-5">
              <h2 className="mb-4 mb-lg-1">Hi, I Am Naveen</h2>
              <h4 className="mb-4 mb-lg-5">
                and I am a{" "}
                <TextLoop>
                  <span className="looptext">Full stack developer</span>
                  <span className="looptext">Mern stack developer</span>
                  <span className="looptext">Javascript developer</span>
                </TextLoop>
              </h4>
              <p className="text-secondary ff-light">
                An Aspiring WEB DEVELOPER An Aspiring WEB DEVELOPER An Aspiring
                WEB DEVELOPER An Aspiring WEB DEVELOPER An Aspiring WEB
                DEVELOPER An Aspiring WEB DEVELOPER An Aspiring WEB DEVELOPER An
                Aspiring WEB DEVELOPER An Aspiring WEB DEVELOPER
              </p>
              <div className="mt-4 mt-lg-5 d-flex flex-column flex-sm-row">
                <button className="btn-primary text-white py-2 px-sm-4 me-sm-3">
                  My Resume
                </button>
                <button className="btn-secondary text-white mt-3 mt-sm-0 py-2 px-sm-4">
                  Hire Me
                </button>
              </div>
            </Col>
            <Col
              lg="5"
              md="5"
              className="d-flex justify-content-end mt-5 ps-0 mt-md-0 banner-image"
            >
              <img src={Image3} alt="person3" width={"100%"} />
            </Col>
          </Row>
        </section>
      </div>
    );
}

export default Banner   