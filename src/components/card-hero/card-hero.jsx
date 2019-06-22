import React from "react";
import {Switch, Route, NavLink, Link} from "react-router-dom";
import PropTypes from "prop-types";

import Header from "../header/header";

import {connect} from "react-redux";
import {getDataItemCurrent} from "../../reducer/data/selectors";
import {Operations} from "../../reducer/data/data";
import {getLoggedStatus} from "../../reducer/user/selectors";

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
        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
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
            {starring.join(`, `)}
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
                    <time className="review__date" dateTime={new Date(item.date).toLocaleDateString(`en-US`, {
                      month: `numeric`,
                      year: `numeric`,
                      day: `numeric`,
                    })}>
                      {new Date(item.date).toLocaleDateString(`en-US`, {
                        month: `long`,
                        year: `numeric`,
                        day: `numeric`,
                      })}
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
                    <time className="review__date" dateTime={new Date(item.date).toLocaleDateString(`en-US`, {
                      month: `numeric`,
                      year: `numeric`,
                      day: `numeric`,
                    })}>
                      {new Date(item.date).toLocaleDateString(`en-US`, {
                        month: `long`,
                        year: `numeric`,
                        day: `numeric`,
                      })}
                    </time>
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

class CardHero extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: `Overview`,
      isInReviewMode: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data.id !== this.props.data.id) {
      this.setState({activeTab: `Overview`});
    }

    if (window.location.pathname !== `/film/${prevProps.data.id}/review`) {
      this.setState({isInReviewMode: false});
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
      fullMode,
      isLogged,
    } = this.props;

    return (
      <section className={`movie-card ${fullMode ? `movie-card--full` : ``}`}>
        <div className={`${fullMode ? `movie-card__header` : ``} ${fullMode ? `movie-card__hero` : ``}`}>
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          {this.state.isInReviewMode ?
            <Header
              breadcrumbsId={id}
              breadcrumbsName={name}
              breadcrumbsGenre={genre}
            />
            :
            <Header/>
          }

          <div className="movie-card__wrap">
            {this.state.isInReviewMode ?
              <div className="movie-card__poster movie-card__poster--small">
                <img src={posterImage} alt={name} width="218" height="327"/>
              </div>
              :
              <React.Fragment>
                {fullMode ?
                  <div className="movie-card__desc">
                    <h2 className="movie-card__title">{name}</h2>
                    <p className="movie-card__meta">
                      <span className="movie-card__genre">{genre}</span>
                      <span className="movie-card__year">{released}</span>
                    </p>

                    <div className="movie-card__buttons">
                      <Link to={{
                        pathname: `/player`,
                        state: {
                          data: this.props.data,
                        },
                      }} className="btn btn--play movie-card__button">
                        <svg viewBox="0 0 19 19" width="19" height="19">
                          <use xlinkHref="#play-s"/>
                        </svg>
                        <span>Play</span>
                      </Link>

                      {isLogged ?
                        <React.Fragment>
                          <Link
                            to={`/mylist`}
                            className="btn btn--list movie-card__button"
                            onClick={() => this.props.setToFavorites(this.props.data)}>
                            <svg viewBox="0 0 18 14" width="18" height="14">
                              {isFavorite ? <use xlinkHref="#in-list"/> : <use xlinkHref="#add"/>}
                            </svg>
                            <span>My list</span>
                          </Link>
                          <Link
                            to={{
                              pathname: `/film/${id}/review`,
                              state: {
                                currentDataItemId: id,
                              },
                            }}
                            onClick={() => this.setState({isInReviewMode: true})}
                            className="btn movie-card__button">
                            Add review
                          </Link>
                        </React.Fragment>
                        :
                        <React.Fragment>
                          <Link to="/login" className="btn btn--list movie-card__button">
                            <svg viewBox="0 0 18 14" width="18" height="14">
                              <use xlinkHref="#add"/>
                            </svg>
                            <span>My list</span>
                          </Link>
                          <Link to={`/login`} className="btn movie-card__button">Add review</Link>
                        </React.Fragment>
                      }
                    </div>
                  </div>
                  :
                  <div className="movie-card__info">
                    <div className="movie-card__poster">
                      <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
                    </div>
                    <div className="movie-card__desc">
                      <h2 className="movie-card__title">{name}</h2>
                      <p className="movie-card__meta">
                        <span className="movie-card__genre">{genre}</span>
                        <span className="movie-card__year">{released}</span>
                      </p>

                      <div className="movie-card__buttons">
                        <Link to={{
                          pathname: `/player`,
                          state: {
                            data: this.props.data,
                          },
                        }} className="btn btn--play movie-card__button">
                          <svg viewBox="0 0 19 19" width="19" height="19">
                            <use xlinkHref="#play-s"/>
                          </svg>
                          <span>Play</span>
                        </Link>

                        {isLogged ?
                          <Link
                            to={`/mylist`}
                            className="btn btn--list movie-card__button"
                            onClick={() => this.props.setToFavorites(this.props.data)}>
                            <svg viewBox="0 0 18 14" width="18" height="14">
                              {isFavorite ? <use xlinkHref="#in-list"/> : <use xlinkHref="#add"/>}
                            </svg>
                            <span>My list</span>
                          </Link>
                          :
                          <Link
                            to={`/login`}
                            className="btn btn--list movie-card__button">
                            <svg viewBox="0 0 18 14" width="18" height="14">
                              <use xlinkHref="#add"/>
                            </svg>
                            <span>My list</span>
                          </Link>
                        }
                      </div>
                    </div>
                  </div>
                }
              </React.Fragment>
            }
          </div>
        </div>

        {fullMode && !this.state.isInReviewMode &&
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li
                    className={`movie-nav__item ${this.state.activeTab === `Overview` ? `movie-nav__item--active` : ``}`}>
                    <NavLink
                      to={{
                        pathname: `/film/${id}`,
                        state: {
                          currentDataItemId: id,
                          currentDataFilter: genre,
                        },
                      }}
                      exact
                      onClick={() => this.setState({activeTab: `Overview`})}
                      className="movie-nav__link">Overview</NavLink>
                  </li>

                  <li
                    className={`movie-nav__item ${this.state.activeTab === `Details` ? `movie-nav__item--active` : ``}`}>
                    <NavLink
                      to={{
                        pathname: `/film/${id}/details`,
                        state: {
                          currentDataItemId: id,
                          currentDataFilter: genre,
                        },
                      }}
                      exact
                      onClick={() => this.setState({activeTab: `Details`})}
                      className="movie-nav__link">Details</NavLink>
                  </li>

                  <li
                    className={`movie-nav__item ${this.state.activeTab === `Reviews` ? `movie-nav__item--active` : ``}`}>
                    <NavLink
                      to={{
                        pathname: `/film/${id}/reviews`,
                        state: {
                          currentDataItemId: id,
                          currentDataFilter: genre,
                        },
                      }}
                      exact
                      onClick={() => this.setState({activeTab: `Reviews`})}
                      className="movie-nav__link">Reviews</NavLink>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path={`/film/${id}`} exact render={() => (<Overview {...this.props.data}/>)}/>
                <Route path={`/film/${id}/details`} exact render={() => (<Details {...this.props.data}/>)}/>
                <Route path={`/film/${id}/reviews`} exact render={() => (<Reviews {...this.props.reviews}/>)}/>
              </Switch>
            </div>
          </div>
        </div>
        }
      </section>
    );
  }
}

CardHero.propTypes = {
  data: PropTypes.object.isRequired,
  reviews: PropTypes.array,
  setToFavorites: PropTypes.func.isRequired,
  fullMode: PropTypes.bool,
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isLogged: getLoggedStatus(state),
    dataItemCurrent: getDataItemCurrent(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  setToFavorites: (data) => {
    dispatch(Operations.setToFavorites(data));
  },
  loadDataItemReviews: (id) => {
    dispatch(Operations.loadDataItemReviews(id));
  },
});

export {CardHero};

export default connect(mapStateToProps, mapDispatchToProps)(CardHero);
