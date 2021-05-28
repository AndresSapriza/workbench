import React from "react";
import { connect } from "react-redux";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ProjectPage = () => {
  let history = useHistory();

  function createProjectClick(event) {
    event.preventDefault();
    let path = "/createProject";
    history.push(path);
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Project page!</h3>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="text-center my-5 col-md-6">
          <i className="fas fa-folder-open big-grey-icon"></i>
          <h5 className="card-title">You currently have no projects</h5>
          <p className="card-text">{"Let's create your first project"}</p>

          <Button onClick={createProjectClick}>{"Create project"}</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default connect()(ProjectPage);
