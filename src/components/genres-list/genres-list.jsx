import React from "react";

const GenresList = () => {
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

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Comedies</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Crime</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Documentary</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Dramas</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Horror</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Kids & Family</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Romance</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Sci-Fi</a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">Thrillers</a>
      </li>
    </ul>
  );
};


export default GenresList;
