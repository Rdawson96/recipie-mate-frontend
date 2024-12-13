
import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignUpForm.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-1 p-md-1">
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Sign Up</h1>
        </Container>
    <Form>
      <Form.Group className="mb-3" controlId="Username">
        <Form.Label className="d-none">Username</Form.Label>
        <Form.Control type="text" placeholder="Username" name="Username"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="d-none">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Password">
        <Form.Label className="d-none">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label className="d-none">Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <Button type="submit">
        Submit
      </Button>
    </Form>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
