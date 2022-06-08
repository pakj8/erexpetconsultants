import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function ModalForm() {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleClose = () => setShow(false);

  useEffect(() => {
    handleOpen();
  }, []);

  const handleOpen = () => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make a Appointment with us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="John Decker" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="number" placeholder="123456789" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Mumbai" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Course</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masters Degree"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Country you want to apply</Form.Label>
              <Form.Control type="text" placeholder="USA" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Purpose</Form.Label>
              <Form.Control type="text" placeholder="Study" autoFocus />
            </Form.Group>
            <Button onClick={handleSubmit} type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
