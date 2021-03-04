import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SignUpForm from "./signUpForm";
import * as authActions from "../../redux/actions/authActions";
import { newUser } from "../../../tools/mockData";
import Validator from "validator";
import { useHistory } from "react-router-dom";

const SignUp = ({ signUp, ...props }) => {
  const [user, setUser] = useState({ ...props.user });
  const [errors, setErrors] = useState({ name: null, email: null });

  let history = useHistory();

  function handleChange(event) {
    if (event.target) {
      const { name, value } = event.target;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
      formIsValid({ [name]: value });
    }
  }

  function formIsValid(target) {
    const { name, email } = target;

    if (name !== undefined) {
      if (!name) {
        errors.name = "Please insert your name";
      } else {
        errors.name = null;
      }
    }

    if (email !== undefined) {
      if (email && !Validator.isEmail(email)) {
        errors.email = "Please insert a valid email";
      } else {
        errors.email = null;
      }
    }

    setErrors(errors);
    return errors.email === null && errors.name === null;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid(user)) return;
    debugger;
    signUp(user)
      .then(() => {
        let path = "/";
        history.push(path);
      })
      .catch((error) => {
        debugger;
        setErrors({ onSave: error.message });
      });
  }

  return (
    <>
      <SignUpForm
        user={user}
        errors={errors}
        onSave={handleSave}
        onChange={handleChange}
        saving={props.loading}
      />
    </>
  );
};

SignUp.propTypes = {
  user: PropTypes.object.isRequired,
  signUp: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    user: newUser,
    loading: state.apiStatus > 0,
  };
}

const mapDispatchToProps = {
  signUp: authActions.signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
