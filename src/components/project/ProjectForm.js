import React from "react";
import PropTypes from "prop-types";
import { Form, Container, Row, Col, Button, Alert } from "react-bootstrap";

const ProjectForm = ({
  project,
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
                <h3>New project!</h3>
              </Col>
            </Row>
            <hr />
            <Form.Group>
              <Form.Label>Project name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Project name"
                value={project.name}
                onChange={onChange}
                isInvalid={errors.name}
                isValid={!errors.name && project.name}
                disabled={saving}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                as="textarea"
                rows={3}
                placeholder="Description..."
                value={project.description}
                onChange={onChange}
                isInvalid={errors.description}
                isValid={!errors.description && project.description}
                disabled={saving}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control
                name="type"
                type="text"
                placeholder="Project type"
                // value={project.type}
                onChange={onChange}
                isInvalid={errors.type}
                isValid={!errors.type && project.type}
                disabled={saving}
              />
              <Form.Control.Feedback type="invalid">
                {errors.type}
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col>
                <Button type="submit" block>
                  {saving ? "Creating project..." : "Create"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

ProjectForm.propTypes = {
  project: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};
export default ProjectForm;
