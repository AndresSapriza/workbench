import React from "react";
import PropTypes from "prop-types";
import { Form, Container, Row, Col, Button, Alert } from "react-bootstrap";

const SignUpForm = ({
  user,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <Container className="my-2 max-wd-500">
      {errors.onSave && <Alert variant="danger">{errors.onSave}</Alert>}
      <Row className="justify-content-md-center">
        <Col>
          <Form className="p-2" onSubmit={onSave}>
            <Row>
              <Col xs={8} sm={10}>
                <h3>Sign Up!</h3>
              </Col>
              <Col xs={4} sm={2}>
                <a href="/login" className="stretched-link my-2 f-right">
                  Sign in
                </a>
              </Col>
            </Row>
            <hr />
            <Form.Group>
              <Form.Label>Your name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Your name"
                value={user.name}
                onChange={onChange}
                isInvalid={errors.name}
                isValid={!errors.name && user.name}
                disabled={saving}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Your email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                value={user.email}
                onChange={onChange}
                isInvalid={errors.email}
                isValid={!errors.email && user.email}
                disabled={saving}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>New password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="New password"
                value={user.password}
                onChange={onChange}
                isInvalid={errors.password}
                isValid={!errors.password && user.password}
                disabled={saving}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col>
                <Button type="submit" block>
                  {saving ? "Signing up..." : "Sign up"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

SignUpForm.propTypes = {
  user: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};
export default SignUpForm;
