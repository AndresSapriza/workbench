import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginForm from "./loginForm";
import * as authActions from "../../redux/actions/authActions";
import { newUser } from "../../../tools/mockData";
import { useHistory } from "react-router-dom";

const Login = ({ login, ...props }) => {
  const [user, setUser] = useState({ ...props.user });
  const [errors, setErrors] = useState({});
  const [firstTime, setFirstTime] = useState(true);

  let history = useHistory();
  useEffect(() => {
    if (!firstTime) formIsValid();
    setFirstTime(false);
  }, [user.name]);

  function handleChange(event) {
    if (event.target) {
      const { name, value } = event.target;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  }

  function formIsValid() {
    const { name } = user;
    const errors = {};

    if (!name) errors.name = "Please inert your name";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    login(user)
      .then(() => {
        let path = "/";
        history.push(path);
      })
      .catch((error) => {
        setErrors({ onSave: error.message });
      });
  }

  return (
    <>
      <LoginForm
        user={user}
        errors={errors}
        onSave={handleSave}
        onChange={handleChange}
        saving={props.loading}
      />
    </>
  );
};

Login.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    user: newUser,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  login: authActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
