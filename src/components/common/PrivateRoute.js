import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  debugger;
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.elementType.isRequired,
};

function mapStateToProps(state) {
  debugger;
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(PrivateRoute);

// export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
//   <Route
//     {...rest}
//     render={(props) =>
//       localStorage.getItem("token") && restricted ? (
//         <Redirect to="/" />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />;
// };
