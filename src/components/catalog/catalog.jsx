import React, {Component} from 'react';
import PropTypes from 'prop-types';

import GenresList from '../genres-list/genres-list';
import MoviesList from "../movies-list/movies-list";

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;
    const {genres} = this.props;

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList genres={genres}/>
        <MoviesList films={films}/>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );
  }
}

Catalog.propTypes = {
  films: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

export default Catalog;
