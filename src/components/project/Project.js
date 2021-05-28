import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as projectActions from "../../redux/actions/projectActions";
import { newProject, newUser } from "../../../tools/mockData";
import { useHistory } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import { Container, Row, Col, Button } from "react-bootstrap";

const Project = ({ createProject, user, ...props }) => {
  const [project, setproject] = useState({ ...props.project, admin: user._id });
  const [errors, setErrors] = useState({
    name: null,
    description: null,
    type: null,
  });

  let history = useHistory();

  function handleChange(event) {
    if (event.target) {
      const { name, value } = event.target;
      setproject((prevproject) => ({
        ...prevproject,
        [name]: value,
      }));
      formIsValid({ [name]: value });
    }
  }

  function formIsValid(target) {
    const { name, description, type } = target;

    if (name !== undefined) {
      if (!name) {
        errors.name = "Please insert your name";
      } else {
        errors.name = null;
      }
    }

    if (description !== undefined) {
      if (!description) {
        errors.description = "Please insert a description for the project.";
      } else {
        errors.description = null;
      }
    }

    if (type !== undefined) {
      if (!type) {
        errors.type = "Please choose a project type.";
      } else {
        errors.type = null;
      }
    }

    setErrors(errors);
    return (
      errors.type === null &&
      errors.name === null &&
      errors.description === null
    );
  }

  function back() {
    history.goBack();
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid(project)) return;
    createProject(project)
      .then(() => {
        let path = "/project";
        history.push(path);
      })
      .catch((error) => {
        setErrors({ onSave: error.message });
      });
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Button onClick={back} type="button">
              <i className="fas fa-arrow-left"></i>
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <ProjectForm
            project={project}
            errors={errors}
            onSave={handleSave}
            onChange={handleChange}
            saving={props.loading}
          />
        </Row>
      </Container>
    </>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  createProject: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const user = state.auth.user ? state.auth.user : newUser;
  return {
    project: newProject,
    loading: state.apiStatus > 0,
    user,
  };
}

const mapDispatchToProps = {
  createProject: projectActions.createProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
