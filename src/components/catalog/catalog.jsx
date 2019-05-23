import React from 'react';
import PropTypes from 'prop-types';

import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';

const Catalog = (props) => {
  const {movies, allGenres, activeGenre, onChangeGenre} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList allGenres={allGenres} activeGenre={activeGenre} onChangeGenre={onChangeGenre}/>
      <MoviesList movies={movies}/>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

Catalog.propTypes = {
  movies: PropTypes.array.isRequired,
  allGenres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string,
  onChangeGenre: PropTypes.func.isRequired,
};

export default Catalog;
