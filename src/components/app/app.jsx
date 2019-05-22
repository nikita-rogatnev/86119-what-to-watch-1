import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card';
import Catalog from "../catalog/catalog";
import PageFooter from "../page-footer/page-footer";

class App extends PureComponent {
  render() {
    const {
      movies,
      allGenres,
      activeGenre,
      onChangeGenre,
    } = this.props;

    return (
      <React.Fragment>
        <MovieCard/>
        <div className="page-content">
          <Catalog
            movies={movies}
            allGenres={allGenres}
            activeGenre={activeGenre}
            onChangeGenre={onChangeGenre}
          />
          <PageFooter/>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        teaser: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
      })
  ),
  allGenres: PropTypes.array.isRequired,
  activeGenre: PropTypes.string,
  onChangeGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies,
  allGenres: state.allGenres,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (activeGenre, movies) => {
    dispatch(ActionCreator.changeGenre(activeGenre));
    dispatch(ActionCreator.getMovies(activeGenre, movies));
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
