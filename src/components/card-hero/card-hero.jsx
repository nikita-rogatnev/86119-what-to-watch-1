import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, NavLink, Link} from "react-router-dom";

import Header from "../header/header";

const Overview = (item) => {
  const {
    rating,
    scoresCount,
    director,
    starring
  } = item;

  return (
    <div className="movie-card__text">
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{CardHero.getRating(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{item.description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring} and other</strong></p>
      </div>
    </div>
  );
};

const Details = (item) => {
  const {
    director,
    starring,
    runTime,
    genre,
    released
  } = item;

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

const Reviews = () => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the
              glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed
              movies in years.</p>

            <footer className="review__details">
              <cite className="review__author">Kate Muir</cite>
              <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,9</div>
        </div>
      </div>
    </div>
  );
};

class CardHero extends React.Component {
  constructor(props) {
    super(props);

    this.path = location.pathname;
    this.id = location.pathname.split(`/`)[2];
  }

  // TODO: Refactor
  // ["Bad", "Bad", "Normal", "Normal", "Good", "Good", "Good", "Very good", "Very good", "Awesome"][rating] || "Unknown"

  static getRating(rating) {
    switch (true) {
      case rating >= 0 && rating < 3:
        return `Bad`;
      case rating >= 3 && rating < 5:
        return `Normal`;
      case rating >= 5 && rating < 8:
        return `Good`;
      case rating >= 8 && rating < 10:
        return `Very good`;
      case rating = 10:
        return `Awesome`;
      default:
        return `Unknown`;
    }
  }

  render() {
    const {
      backgroundImage,
      name,
      genre,
      released,
      isFavorite,
      posterImage,
    } = this.state;

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
                {isFavorite ?
                  <Link to="/mylist" className="btn btn--list movie-card__button">
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                    <span>My list</span>
                  </Link> :
                  <button type="button" className="btn btn--list movie-card__button">
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>}
                <Link to={`${this.path}/review`} className="btn movie-card__button">Add review</Link>
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
                  <li className={`movie-nav__item`}>
                    <NavLink to={`${this.path}`} exact className="movie-nav__link">Overview</NavLink>
                  </li>
                  <li className={`movie-nav__item`}>
                    <NavLink to={`${this.path}/details`} className="movie-nav__link">Details</NavLink>
                  </li>
                  <li className="movie-nav__item">
                    <NavLink to={`${this.path}/reviews`} className="movie-nav__link">Reviews</NavLink>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path={`${this.path}`} exact render={() => (<Overview {...this.props}/>)}/>
                <Route path={`${this.path}/details`} render={() => (<Details {...this.props}/>)}/>
                <Route path={`${this.path}/reviews`} render={() => (<Reviews {...this.props}/>)}/>
              </Switch>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

CardHero.propTypes = {
  data: PropTypes.array.isRequired,
};


export default CardHero;
