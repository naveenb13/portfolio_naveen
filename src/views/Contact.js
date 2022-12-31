import React from "react";
import { Row, Col, Input, Form, Label, Button } from "reactstrap";
import Image1 from "../assets/images/contactin.png";
import { useForm, Controller } from "react-hook-form";

const Contact = () => {

    const { control, handleSubmit } = useForm({
      defaultValues: {
        firstName: "",
        select: {},
      },
    });
    const onSubmit = (data) => console.log(data);

  return (
    <div className="container" id="contact">
      <section>
        <Row className="align-items-center justify-content-center py-5">
          <Col lg="5" md="12" xs="12" sm="12">
            <img src={Image1} className="img-fluid" alt="choose-left" />
          </Col>
          <Col lg="1"></Col>
          <Col lg="6" className="ps-0 pe-sm-5 mt-5 mt-lg-0">
            <span className="service-btn text-secondary p-2">Contact Me</span>
            <h2 className="my-4">Contact Me</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Label>Name</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              <Label>Email</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              <Label>Message</Label>
              <Controller
                name="message"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              <Button className="submitbutton" type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Contact;
