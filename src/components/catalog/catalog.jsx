import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import FiltersList from '../filters-list/filters-list';
import MoviesList from '../movies-list/movies-list';

class Catalog extends PureComponent {
  render() {
    const FiltersListWithActiveItem = withActiveItem(FiltersList);
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

        <FiltersListWithActiveItem filters={filters} currentFilter={currentFilter} changeCurrentFilter={changeCurrentFilter}/>
        <MoviesListWithActiveItem data={data}/>

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

export default Catalog;
