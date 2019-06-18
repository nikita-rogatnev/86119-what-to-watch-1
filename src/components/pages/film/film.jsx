import React from "react";
import PropTypes from "prop-types";

import CardHero from "../../card-hero/card-hero";
import Catalog from "../../catalog/catalog";
import Footer from "../../footer/footer";

import {connect} from "react-redux";
import {ActionCreators} from "../../../reducer/data/data";
import {
  getDataItemCurrent,
  getFilterCurrent,
  getFilters,
  getFilteredData,
  getDataItemReviews,
} from "../../../reducer/data/selectors";
import {Operations} from "../../../reducer/data/data";

class Film extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.changeCurrentFilter(this.props.location.state.currentDataFilter);
    // eslint-disable-next-line react/prop-types
    this.props.changeDataItemCurrent(this.props.location.state.currentDataItemId);
    // eslint-disable-next-line react/prop-types
    this.props.loadDataItemReviews(this.props.location.state.currentDataItemId);
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/prop-types
    const currentId = this.props.location.state.currentDataItemId;
    // eslint-disable-next-line react/prop-types
    const previousId = prevProps.location.state.currentDataItemId;

    if (currentId !== previousId) {
      this.props.changeDataItemCurrent(currentId);
      this.props.loadDataItemReviews(currentId);
    }
  }

  render() {
    const {
      data,
      dataItemCurrent,
      dataItemReviews,
      filters,
      currentFilter,
      changeCurrentFilter,
    } = this.props;

    return (
      <React.Fragment>
        <CardHero
          fullMode={true}
          data={dataItemCurrent}
          reviews={dataItemReviews}
        />
        <main className="page-content">
          <Catalog
            data={data}
            filters={filters}
            currentFilter={currentFilter}
            changeCurrentFilter={changeCurrentFilter}
            maxCardsNumber={4}
            catalogTitle={`More like this`}
            showCatalogTitle={true}
            showPlayButton={true}
          />
          <Footer/>
        </main>
      </React.Fragment>
    );
  }
}

Film.propTypes = {
  data: PropTypes.array.isRequired,
  dataItemCurrent: PropTypes.object.isRequired,
  dataItemReviews: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
  changeDataItemCurrent: PropTypes.func.isRequired,
  loadDataItemReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: getFilteredData(state),
    dataItemCurrent: getDataItemCurrent(state),
    dataItemReviews: getDataItemReviews(state),
    filters: getFilters(state),
    currentFilter: getFilterCurrent(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentFilter: (genre) => {
    dispatch(ActionCreators.changeCurrentFilter(genre));
  },
  changeDataItemCurrent: (id) => {
    dispatch(ActionCreators.changeDataItemCurrent(id));
  },
  loadDataItemReviews: (id) => {
    dispatch(Operations.loadDataItemReviews(id));
  },
});

export {Film};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
