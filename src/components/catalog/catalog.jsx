import React from 'react';

import GenresList from '../genres-list/genres-list';
import MoviesList from "../movies-list/movies-list";

const Catalog = () => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList/>
      <MoviesList/>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
};

export default Catalog;
