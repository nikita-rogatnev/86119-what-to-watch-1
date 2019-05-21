import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card';
import Catalog from "../catalog/catalog";
import PageFooter from "../page-footer/page-footer";

class App extends PureComponent {
  render() {
    const {films, genres} = this.props;

    return (
      <React.Fragment>
        <MovieCard/>
        <div className="page-content">
          <Catalog films={films} genres={genres}/>
          <PageFooter/>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

export default App;
