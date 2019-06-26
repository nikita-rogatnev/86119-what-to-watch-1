import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {dataItemShape, userShape} from "../../../models";

import Logo from "../../logo/logo";
import AddReview from "../../add-review/add-review";

import {connect} from "react-redux";
import {ActionCreators} from "../../../reducer/data/data";
import {getDataItemCurrent} from "../../../reducer/data/selectors";
import {getAuthorizationStatus, getLoggedStatus, getUserData} from "../../../reducer/user/selectors";

class Review extends React.PureComponent {
  render() {
    const {
      id,
      genre,
      backgroundImage,
      posterImage,
      name,
    } = this.props.dataItemCurrent;

    const {
      isLogged,
      isAuthorizationRequired,
      user,
    } = this.props;

    const pathname = window.location.pathname;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link
                    to={{
                      pathname: `/film/${id}`,
                      state: {
                        currentDataItemId: id,
                        currentDataFilter: genre,
                      },
                    }}
                    className="breadcrumbs__link">
                    {name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            {pathname !== `/login` &&
            <div className="user-block">
              {isLogged && <div className="user-block__avatar">
                <Link to="/mylist">
                  <img src={user.avatar} width="63" height="63" alt={`${user.name} avatar`}/>
                </Link>
              </div>}

              {!isLogged && !isAuthorizationRequired &&
              <Link to="/login" className="user-block__link" onClick={() => this._handleClick()}>
                Sign in
              </Link>}
            </div>}
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
          </div>
        </div>

        <AddReview id={id} genre={genre}/>

      </section>
    );
  }
}

Review.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  user: userShape,
  dataItemCurrent: dataItemShape,
  breadcrumbsId: PropTypes.number,
  breadcrumbsName: PropTypes.string,
  breadcrumbsGenre: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    isAuthorizationRequired: getAuthorizationStatus(state),
    isLogged: getLoggedStatus(state),
    user: getUserData(state),
    dataItemCurrent: getDataItemCurrent(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeDataItemCurrent: (id) => {
    dispatch(ActionCreators.changeDataItemCurrent(id));
  },
});

export {Review};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
