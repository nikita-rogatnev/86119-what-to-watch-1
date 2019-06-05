import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Logo from "../logo/logo";

import {getAuthorizationStatus, getLoggedStatus} from "../../reducer/user/selectors";
import {ActionCreator} from "../../reducer/user/user";

class Header extends React.PureComponent {
  _onClick() {
    this.props.requireAuthorization(true);
  }

  render() {
    const {
      isLogged,
      isAuthorizationRequired,
      userAvatarUrl
    } = this.props;

    return (
      <header
        className={`page-header ${!isLogged && !isAuthorizationRequired ? `movie-card__head` : `user-page__head`}`}>
        <Logo/>

        {isAuthorizationRequired && <h1 className="page-title user-page__title">Sign in</h1>}

        <div className="user-block">
          {isLogged && <div className="user-block__avatar">
            <Link to="/mylist">
              <img src={userAvatarUrl} width="63" height="63" alt="User avatar"/>
            </Link>
          </div>}
          {!isLogged && !isAuthorizationRequired &&
          <Link to="/login" className="user-block__link" onClick={() => this._onClick()}>
            Sign in
          </Link>}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    isAuthorizationRequired: getAuthorizationStatus(state),
    isLogged: getLoggedStatus(state)
  });

const mapDispatchToProps = (dispatch) => ({
  requireAuthorization: (status) => dispatch(ActionCreator.requireAuthorization(status))
});

Header.propTypes = {
  isAuthorizationRequired: PropTypes.bool.PropTypes,
  isLogged: PropTypes.bool.isRequired,
  requireAuthorization: PropTypes.func.isRequired,
  userAvatarUrl: PropTypes.string
};

export {Header};

const HeaderWrapped = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderWrapped;
