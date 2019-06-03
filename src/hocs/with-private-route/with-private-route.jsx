import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

const withPrivateRoute = (Component) => {
  const WithPrivateRoute = (props) => {
    if (props.userData) {
      return <Component {...props} />;
    }

    return <Redirect to="/login"/>;
  };

  WithPrivateRoute.propTypes = {
    userData: PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
  };

  return WithPrivateRoute;
};

export default withPrivateRoute;
