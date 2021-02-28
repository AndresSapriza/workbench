import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  restricted,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.elementType.isRequired,
  restricted: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(PublicRoute);
