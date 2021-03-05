import React from "react";
import PropTypes from "prop-types";
import { Form, Container, Row, Col, Button, Alert } from "react-bootstrap";

const LoginForm = ({ user, onSave, onChange, saving = false, errors = {} }) => {
  return (
    <Container className="my-2 max-wd-500">
      {errors.onSave && <Alert variant="danger">{errors.onSave}</Alert>}
      <Row className="justify-content-md-center">
        <Col>
          <Form className="p-2" onSubmit={onSave}>
            <h3>Workbench</h3>
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
              <Form.Label>Your password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Your password"
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
                  {saving ? "Logging..." : "Sign in"}
                </Button>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <Form.Label className="text-muted">{"Forgot"}</Form.Label>
                <a href="#" className="stretched-link mx-1">
                  password?
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="text-muted">
                  {"Not a member?"}
                </Form.Label>
                <a href="/#/signup" className="stretched-link mx-1">
                  Sign up
                </a>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};
export default LoginForm;
