import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header';

class CardHero extends React.PureComponent {
  constructor(props) {
    super(props);

    this.id = location.pathname.split(`/`)[2];
  }

  static getRating(rating) {
    switch (true) {
      case rating >= 0 && rating < 3:
        return `bad`;
      case rating >= 3 && rating < 5:
        return `normal`;
      case rating >= 5 && rating < 8:
        return `good`;
      case rating >= 8 && rating < 10:
        return `very good`;
      case rating = 10:
        return `awesome`;
      default:
        return `Unknown`;
    }
  }

  render() {
    const {data} = this.props;
    const item = data.find((it) => it.id === +this.id);

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={item.backgroundImage} alt={item.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{item.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{item.genre}</span>
                <span className="movie-card__year">{item.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={item.posterImage} alt={`${item.name} poster`} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{item.rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{CardHero.getRating(item.rating)}</span>
                  <span className="movie-rating__count">{item.scoresCount} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{item.description}</p>
                <p className="movie-card__director"><strong>Director: {item.director}</strong></p>
                <p className="movie-card__starring"><strong>Starring: {item.starring} and other</strong></p>
              </div>
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
