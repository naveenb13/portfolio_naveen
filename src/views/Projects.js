import React from 'react'
import { Row, Col, Card, CardImg, CardBody, Button } from 'reactstrap'
import Image1 from "../assets/images/post1.png"
import Image2 from "../assets/images/post2.png"
import Image3 from "../assets/images/post3.png"

const Projects = () => {

    const clients = [
        {
            image: Image1,
            title: 'How to Use Social Proof in Marketing'

        },
        {
            image: Image2,
            title: 'Make a great first impression with these titles'

        },
        {
            image: Image3,
            title: 'How to Grab Your Reader’s Attention'

        }
    ]
    return (
      <div className="about-container" id="projects">
        <div className="container">
          <section>
            <span className="service-btn text-secondary p-2 text-uppercase">
              Projects
            </span>
            <Row className="justify-content-center">
              <Col lg="12">
                <h2 className="my-4">PROJECTS THAT I BUILT</h2>
                <p className="text-secondary ff-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero.
                </p>
              </Col>
            </Row>
            <Row className="align-items-center article-section py-5">
              {clients.map((item) => (
                <Col lg="4" md="4" className="mt-4 mt-md-0">
                  <Card className="bg-service1">
                    <CardImg
                      src={item.image}
                      className="img-fluid p-2"
                      alt="article"
                    />
                    <CardBody>
                      <p className="text-secondary">August 28, 2022</p>
                      <h5 className="text-dark ff-reg my-3">
                        {item.title}
                      </h5>
                      <p className="text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero.
                      </p>
                      <div className="d-flex justify-content-between">
                        <Button color="primary" className="btn btn-sm">
                          SOURCE CODE
                        </Button>
                        <Button color="success" className="btn btn-sm">
                          SEE LIVE
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>
        </div>
      </div>
    );
}

export default Projects