import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFilteredData, getFilmsGenres} from '../../reducer/data/selectors';
import {getCurrentFilter, changeCurrentFilter} from '../../reducer/filter/selectors';

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';

export class Catalog extends PureComponent {
  render() {
    const GenresListWithActiveItem = withActiveItem(GenresList);
    const MoviesListWithActiveItem = withActiveItem(MoviesList);
    const {
      data,
      filters,
      currentFilter,
      changeCurrentFilter
    } = this.props;

    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresListWithActiveItem filters={filters} currentFilter={currentFilter}/>
        <MoviesListWithActiveItem data={data} changeCurrentFilter={changeCurrentFilter}/>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );
  }
}

Catalog.propTypes = {
  data: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  data: getFilteredData(state),
  filters: getFilmsGenres(state),
  currentFilter: getCurrentFilter(state),
  changeCurrentFilter: changeCurrentFilter(state),
});

export default connect(mapStateToProps)(Catalog);
