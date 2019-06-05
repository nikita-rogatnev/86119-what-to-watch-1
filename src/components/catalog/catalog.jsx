import React from "react";
import PropTypes from "prop-types";

import Filters from "../filters/filters";
import CardList from "../card-list/card-list";

import withActiveItem from "../../hocs/with-active-item/with-active-item";

const FiltersListWithActiveItem = withActiveItem(Filters);
const CardListWithActiveItem = withActiveItem(CardList);

class Catalog extends React.PureComponent {
  render() {
    const {
      data,
      filters,
      currentFilter,
      changeCurrentFilter,
      showFilters = false,
      showMoreButton = false,
      showPlayButton = false,
      catalogTitle = `Catalog`,
      showCatalogTitle = false,
    } = this.props;

    return (
      <section className="catalog">
        <h2 className={`catalog__title ${showCatalogTitle ? `` : `visually-hidden`}`}>{catalogTitle}</h2>

        {showFilters ?
          <FiltersListWithActiveItem
            filters={filters}
            currentFilter={currentFilter}
            changeCurrentFilter={changeCurrentFilter}
          />
          : ``}

        <CardListWithActiveItem data={data} showPlayButton={showPlayButton}/>

        {showMoreButton ?
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
          : ``}
      </section>
    );
  }
}

Catalog.propTypes = {
  data: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
  showFilters: PropTypes.bool,
  showMoreButton: PropTypes.bool,
  showPlayButton: PropTypes.bool,
  catalogTitle: PropTypes.string,
  showCatalogTitle: PropTypes.bool,
};

export default Catalog;
