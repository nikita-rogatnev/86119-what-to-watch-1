import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card';
import PageContent from '../page-content/page-content';

class App extends PureComponent {
  render() {
    const {films, genres} = this.props;

    return (
      <React.Fragment>
        <MovieCard/>
        <PageContent films={films} genres={genres}/>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

export default App;
