import React from 'react'
import { Row, Col } from 'reactstrap'
import Image1 from "../assets/images/skills.png";

const Skills = () => {


    const skills = [
        {
            name: "HTML",
        },
        {
            name: "CSS",
        },
        {
            name: "JAVASCRIPT",
        },
        {
            name: "REACT",
        },
        {
            name: "NODEJS",
        },
        {
            name: "MONGODB",
        },
        {
            name: "SQL",
        },
        {
            name: "REDUX",
        },
        {
            name: "REACT NATIVE",
        },
    ];
    return (
      <div className="container" id="skills">
        <section>
          <Row className="align-items-center justify-content-center py-5">
            <Col
              xl="7"
              lg="7"
              md="6"
              className="order-2 order-md-1 mt-5 mt-md-0"
            >
              <span className="service-btn text-secondary p-2">Skills</span>
              <Row>
                <h2 className="my-4">SKILLS</h2>
                <p className="text-secondary ff-light pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor.
                </p>
                {skills.map((item) => {
                  return (
                    <Col
                      lg="4"
                      md="4"
                      sm="6"
                      data-aos="flip-right"
                      data-aos-duration="800"
                    >
                      <div className="bg-service p-3 mb-4">
                        <h4 className="text-black ff-bold d-flex justify-content-center align-items-center mb-0">
                          {item.name}
                        </h4>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col
              xl="5"
              lg="5"
              md="6"
              className="d-flex justify-content-center justify-content-md-end order-1 order-md-2"
            >
              <img
                src={Image1}
                width={500}
                className="img-fluid"
                alt="status"
              />
            </Col>
          </Row>
        </section>
      </div>
    );
}

export default Skills