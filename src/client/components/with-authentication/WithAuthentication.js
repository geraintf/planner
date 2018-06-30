import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getIsAuthenticated } from 'src/redux/selectors';

const WithAuthentication = (Component) => {
  const AuthenticatedContainer = ({ isAuthenticated, ...props }) =>
    isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />;


  AuthenticatedContainer.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  AuthenticatedContainer.fetchData = params => {
    const TargetComponent = Component.WrappedComponent ? Component.WrappedComponent : Component;
    return TargetComponent.fetchData ? TargetComponent.fetchData(params) : null;
  };

  const mapStateToProps = state => ({
    isAuthenticated: getIsAuthenticated(state)
  });


  return connect(mapStateToProps)(AuthenticatedContainer);
};

export default WithAuthentication;
