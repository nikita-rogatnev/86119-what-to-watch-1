import React from "react";

import SmallMovieCard from '../small-movie-card/small-movie-card';

const MoviesList = () => {
  const moviesList = [
    {
      id: 1,
      name: `Shutter Island`,
      link: `movie-page.html`
    },
    {
      id: 2,
      name: `Seven Years in Tibet`,
      link: `movie-page.html`
    }
  ];

  return (
    <div className="catalog__movies-list">
      {moviesList.map((item) =>
        <SmallMovieCard
          key={item.id}
          movieName={item.name}
          movieLink={item.link}
        />
      )}
    </div>
  );
};

export default MoviesList;
