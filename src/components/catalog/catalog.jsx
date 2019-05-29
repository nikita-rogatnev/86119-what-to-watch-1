import React from 'react';
import PropTypes from 'prop-types';

import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';

import withActiveItem from '../../hocs/with-active-item/with-active-item';

const Catalog = (props) => {
  const {
    movies,
    allGenres,
    activeGenre,
    onChangeGenre
  } = props;

  const GenresListWithActiveItem = withActiveItem(GenresList);
  const MoviesListWithActiveItem = withActiveItem(MoviesList);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresListWithActiveItem allGenres={allGenres} activeGenre={activeGenre} onActiveGenreChange={onChangeGenre}/>
      <MoviesListWithActiveItem movies={movies}/>

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
