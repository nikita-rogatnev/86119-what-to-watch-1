import React from "react";
import {Link, withRouter} from "react-router-dom";
import PropTypes from "prop-types";

import Logo from "../logo/logo";

import {connect} from "react-redux";
import {getAuthorizationStatus, getLoggedStatus, getUserData} from "../../reducer/user/selectors";
import {ActionCreator} from "../../reducer/user/user";

class Header extends React.Component {
  _onClick() {
    this.props.requireAuthorization(true);
  }

  render() {
    const {
      isLogged,
      isAuthorizationRequired,
      user,
      title,
      breadcrumbsId,
      breadcrumbsName,
      breadcrumbsGenre,
    } = this.props;

    const pathname = window.location.pathname;

    return (
      <header
        className={`page-header ${pathname === `/login` || `/mylist` ? `user-page__head` : `movie-card__head`}`}>

        <Logo/>

        {breadcrumbsId &&
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link
                to={{
                  pathname: `/film/${breadcrumbsId}`,
                  state: {
                    currentDataItemId: breadcrumbsId,
                    currentDataFilter: breadcrumbsGenre,
                  },
                }}
                onClick={() => this.setState({isInReviewMode: false})}
                className="breadcrumbs__link">
                {breadcrumbsName}
              </Link>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>
        }

        <h1 className="page-title user-page__title">{title}</h1>

        {pathname !== `/login` &&
        <div className="user-block">
          {isLogged && <div className="user-block__avatar">
            <Link to="/mylist">
              <img src={user.avatar} width="63" height="63" alt={`${user.name} avatar`}/>
            </Link>
          </div>}
          {!isLogged && !isAuthorizationRequired &&
          <Link to="/login" className="user-block__link" onClick={() => this._onClick()}>
            Sign in
          </Link>}
        </div>
        }
      </header>
    );
  }
}

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    isAuthorizationRequired: getAuthorizationStatus(state),
    isLogged: getLoggedStatus(state),
    user: getUserData(state),
  });

const mapDispatchToProps = (dispatch) => ({
  requireAuthorization: (status) => dispatch(ActionCreator.requireAuthorization(status)),
});

Header.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  requireAuthorization: PropTypes.func.isRequired,
  user: PropTypes.object,
  title: PropTypes.string,
  breadcrumbsId: PropTypes.number,
  breadcrumbsName: PropTypes.string,
  breadcrumbsGenre: PropTypes.string,
};

export {Header};

const HeaderWrapped = connect(mapStateToProps, mapDispatchToProps)(Header);

export default withRouter(HeaderWrapped);
