import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, NavLink, Link} from "react-router-dom";

import Header from "../header/header";
import {connect} from "react-redux";

import {getDataItemCurrent} from "../../reducer/data/selectors";
import {Operations} from "../../reducer/data/data";

import {getLoggedStatus} from "../../reducer/user/selectors";
import {ActionCreator} from "../../reducer/user/user";

const Overview = (data) => {
  const {
    rating,
    scoresCount,
    director,
    starring,
    description,
  } = data;

  return (
    <div className="movie-card__text">
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {[`Bad`, `Bad`, `Normal`, `Normal`, `Good`, `Good`, `Good`, `Very good`, `Very good`, `Awesome`][Math.floor(rating)] || `Unknown`}
          </span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring} and other</strong></p>
      </div>
    </div>
  );
};

const Details = (data) => {
  const {
    director,
    starring,
    runTime,
    genre,
    released,
  } = data;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

const Reviews = (data) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {Object
          .values(data)
          .filter((item, key) => key % 2 === 0)
          .map((item) => {
            return (
              <div className="review" key={item.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{item.comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{item.user.name}</cite>
                    <time className="review__date" dateTime={item.date}>
                      {item.date}
                    </time>
                  </footer>
                </blockquote>
                <div className="review__rating">{item.rating}</div>
              </div>
            );
          })}
      </div>
      <div className="movie-card__reviews-col">
        {Object
          .values(data)
          .filter((item, key) => key % 2 === 1)
          .map((item) => {
            return (
              <div className="review" key={item.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{item.comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{item.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">{item.date}</time>
                  </footer>
                </blockquote>
                <div className="review__rating">{item.rating}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

class CardHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pathname: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (window.location.pathname !== prevState.pathname) {
      this.setState({pathname: window.location.pathname});
    }
  }

  render() {
    const {
      id,
      backgroundImage,
      name,
      genre,
      released,
      isFavorite,
      posterImage,
    } = this.props.data;

    const {
      isLogged,
    } = this.props;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                {!isLogged ?
                  <Link to="/login" className="btn btn--list movie-card__button">
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </Link>
                  :
                  <Route render={({history}) => (
                    <button
                      type="button"
                      className="btn btn--list movie-card__button"
                      onClick={() => {
                        this.props.setToFavorites(this.props.data);
                        history.push(`/mylist`);
                      }}
                    >
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        {isFavorite ? <use xlinkHref="#in-list"/> : <use xlinkHref="#add"/>}
                      </svg>
                      <span>My list</span>
                    </button>
                  )}/>
                }

                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li
                    className={`movie-nav__item ${this.state.pathname === `/films/${id}/` ? `movie-nav__item--active` : ``}`}>
                    <NavLink
                      to={{
                        pathname: `/films/${id}/`,
                        state: {
                          currentDataItemId: id,
                          currentDataFilter: genre,
                        },
                      }}
                      exact
                      onClick={() => this.setState({pathname: `/films/${id}/`})}
                      className="movie-nav__link">Overview</NavLink>
                  </li>
                  <li
                    className={`movie-nav__item ${this.state.pathname === `/films/${id}/details/` ? `movie-nav__item--active` : ``}`}>
                    <NavLink
                      to={{
                        pathname: `/films/${id}/details/`,
                        state: {
                          currentDataItemId: id,
                          currentDataFilter: genre,
                        },
                      }}
                      onClick={() => this.setState({pathname: `/films/${id}/details/`})}
                      className="movie-nav__link">Details</NavLink>
                  </li>
                  <li
                    className={`movie-nav__item ${this.state.pathname === `/films/${id}/reviews/` ? `movie-nav__item--active` : ``}`}>
                    <NavLink
                      to={{
                        pathname: `/films/${id}/reviews/`,
                        state: {
                          currentDataItemId: id,
                          currentDataFilter: genre,
                        },
                      }}
                      onClick={() => this.setState({pathname: `/films/${id}/reviews/`})}
                      className="movie-nav__link">Reviews</NavLink>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path={`/films/${id}/`} exact render={() => (<Overview {...this.props.data}/>)}/>
                <Route path={`/films/${id}/details`} render={() => (<Details {...this.props.data}/>)}/>
                <Route path={`/films/${id}/reviews`} render={() => (<Reviews {...this.props.reviews}/>)}/>
              </Switch>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

CardHero.propTypes = {
  data: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  setToFavorites: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLogged: getLoggedStatus(state),
    dataItemCurrent: getDataItemCurrent(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  requireAuthorization: (status) => {
    dispatch(ActionCreator.requireAuthorization(status));
  },
  setToFavorites: (data) => {
    dispatch(Operations.setToFavorites(data));
  },
  loadDataItemReviews: (id) => {
    dispatch(Operations.loadDataItemReviews(id));
  },
});

export {CardHero};

export default connect(mapStateToProps, mapDispatchToProps)(CardHero);
