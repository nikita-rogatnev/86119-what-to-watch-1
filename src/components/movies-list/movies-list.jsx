import React from "react";

import SmallMovieCard from '../small-movie-card/small-movie-card';

const MoviesList = () => {
  const moviesList = [
    {
      id: 1,
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
      link: `movie-page.html`
    },
    {
      id: 2,
      name: `Bohemian Rhapsody`,
      link: `movie-page.html`
    },
    {
      id: 3,
      name: `Macbeth`,
      link: `movie-page.html`
    },
    {
      id: 4,
      name: `Aviator`,
      link: `movie-page.html`
    },
    {
      id: 5,
      name: `We need to talk about Kevin`,
      link: `movie-page.html`
    },
    {
      id: 6,
      name: `What We Do in the Shadows`,
      link: `movie-page.html`
    },
    {
      id: 7,
      name: `Revenant`,
      link: `movie-page.html`
    },
    {
      id: 8,
      name: `Johnny English`,
      link: `movie-page.html`
    },
    {
      id: 9,
      name: `Shutter Island`,
      link: `movie-page.html`
    },
    {
      id: 10,
      name: `Pulp Fiction`,
      link: `movie-page.html`
    },
    {
      id: 11,
      name: `No Country for Old Men`,
      link: `movie-page.html`
    },
    {
      id: 12,
      name: `Snatch`,
      link: `movie-page.html`
    },
    {
      id: 13,
      name: `Moonrise Kingdom`,
      link: `movie-page.html`
    },
    {
      id: 14,
      name: `Seven Years in Tibet`,
      link: `movie-page.html`
    },
    {
      id: 15,
      name: `Midnight Special`,
      link: `movie-page.html`
    },
    {
      id: 16,
      name: `War of the Worlds`,
      link: `movie-page.html`
    },
    {
      id: 17,
      name: `Dardjeeling Limited`,
      link: `movie-page.html`
    },
    {
      id: 18,
      name: `Orlando`,
      link: `movie-page.html`
    },
    {
      id: 19,
      name: `Mindhunter`,
      link: `movie-page.html`
    },
    {
      id: 20,
      name: `Midnight Special`,
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
