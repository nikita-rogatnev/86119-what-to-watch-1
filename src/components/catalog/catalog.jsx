import React from "react";
import PropTypes from "prop-types";
import {dataItemShape} from "../../models";

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
      maxCardsNumber = 20,
      catalogTitle = `Catalog`,
      showCatalogTitle = false,
      showFilters = false,
      showMoreButton = false,
      showPlayButton = false,
    } = this.props;

    return (
      <section className={`catalog ${showCatalogTitle ? `catalog--like-this` : ``}`}>
        <h2 className={`catalog__title ${showCatalogTitle ? `` : `visually-hidden`}`}>{catalogTitle}</h2>

        {showFilters &&
        <FiltersListWithActiveItem
          filters={filters}
          currentFilter={currentFilter}
          changeCurrentFilter={changeCurrentFilter}
        />}

        {data &&
        <CardListWithActiveItem
          data={data.slice(0, maxCardsNumber)}
          showPlayButton={showPlayButton}
        />}

        {showMoreButton &&
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>}
      </section>
    );
  }
}

Catalog.propTypes = {
  data: PropTypes.arrayOf(dataItemShape),
  filters: PropTypes.arrayOf(PropTypes.string),
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
  maxCardsNumber: PropTypes.number,
  showFilters: PropTypes.bool,
  showCatalogTitle: PropTypes.bool,
  catalogTitle: PropTypes.string,
  showMoreButton: PropTypes.bool,
  showPlayButton: PropTypes.bool,
};

export default Catalog;
