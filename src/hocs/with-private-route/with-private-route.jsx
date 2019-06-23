import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

import {connect} from "react-redux";
import {getUserData} from "../../reducer/user/selectors";

const withPrivateRoute = (Component) => {
  class WithPrivateRoute extends React.PureComponent {
    render() {
      if (this.props.user) {
        return <Component {...this.props} />;
      }

      return <Redirect to="/login"/>;
    }
  }

  WithPrivateRoute.propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }),
  };

  const mapStateToProps = (state) => {
    return {
      user: getUserData(state),
    };
  };

  return connect(mapStateToProps)(WithPrivateRoute);
};

export default withPrivateRoute;
