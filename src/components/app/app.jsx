import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card';
import PageContent from '../page-content/page-content';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;
    const {genres} = this.props;

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
