import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as authActions from "../redux/actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PageNotFound from "./PageNotFound";
import Login from "./login/login";
import SignUp from "./signUp/signUp";
import "./../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./home/homePage";
import PrivateRoute from "./common/PrivateRoute";
import PublicRoute from "./common/PublicRoute";

function App({ loadLoggedUser }) {
  useEffect(() => {
    loadLoggedUser();
  });
  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
        <PublicRoute exact path="/#/login" component={Login} restricted />
        <PublicRoute exact path="/#/signup" component={SignUp} restricted />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  loadLoggedUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}

const mapDispatchToProps = {
  loadLoggedUser: authActions.loadLoggedUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
