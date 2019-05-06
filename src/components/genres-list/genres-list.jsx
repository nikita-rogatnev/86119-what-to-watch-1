import React from "react";

const genresList = [
  {
    "title": `All genres`,
    "isActive": true
  },
  {
    "title": `Comedies`,
    "isActive": false
  },
  {
    "title": `Crime`,
    "isActive": false
  },
  {
    "title": `Documentary`,
    "isActive": false
  },
  {
    "title": `Dramas`,
    "isActive": false
  },
  {
    "title": `Horror`,
    "isActive": false
  },
  {
    "title": `Kids & Family`,
    "isActive": false
  },
  {
    "title": `Romance`,
    "isActive": false
  },
  {
    "title": `Sci-Fi`,
    "isActive": false
  },
  {
    "title": `Thrillers`,
    "isActive": false
  }
];

const GenresList = () => {
  return (
    <ul className="catalog__genres-list">
      {genresList.map((item) => (
        <li key={item.title} className={`catalog__genres-item ${item.isActive ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
