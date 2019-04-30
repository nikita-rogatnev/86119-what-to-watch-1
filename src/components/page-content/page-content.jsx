import React from 'react';

const PageContent = () => {
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

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

        <div className="catalog__movies-list">
          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of
                Grindelwald</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/aviator.jpg" alt="Aviator" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
            </h3>
          </article>


          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">We need to talk about Kevin</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">What We Do in the Shadows</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/revenant.jpg" alt="Revenant" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Revenant</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/johnny-english.jpg" alt="Johnny English" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Johnny English</a>
            </h3>
          </article>


          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/shutter-island.jpg" alt="Shutter Island" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Shutter Island</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/pulp-fiction.jpg" alt="Pulp Fiction" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Pulp Fiction</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/no-country-for-old-men.jpg" alt="No Country for Old Men" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">No Country for Old Men</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/snatch.jpg" alt="Snatch" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Snatch</a>
            </h3>
          </article>


          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/moonrise-kingdom.jpg" alt="Moonrise Kingdom" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Moonrise Kingdom</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/seven-years-in-tibet.jpg" alt="Seven Years in Tibet" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Seven Years in Tibet</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/midnight-special.jpg" alt="Midnight Special" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Midnight Special</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/war-of-the-worlds.jpg" alt="War of the Worlds" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">War of the Worlds</a>
            </h3>
          </article>


          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/dardjeeling-limited.jpg" alt="Dardjeeling Limited" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Dardjeeling Limited</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/orlando.jpg" alt="Orlando" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Orlando</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/mindhunter.jpg" alt="Mindhunter" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Mindhunter</a>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <button className="small-movie-card__play-btn" type="button">Play</button>
            <div className="small-movie-card__image">
              <img src="img/midnight-special.jpg" alt="Midnight Special" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Midnight Special</a>
            </h3>
          </article>
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default PageContent;
