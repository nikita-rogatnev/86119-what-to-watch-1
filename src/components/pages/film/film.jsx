import React from "react";
import PropTypes from "prop-types";

import Catalog from "../../catalog/catalog";
import Footer from "../../footer/footer";

import {connect} from "react-redux";
import {ActionCreators} from "../../../reducer/data/data.js";
import {getFilteredData} from "../../../reducer/data/selectors.js";
import {getCurrentFilter, getFilters} from "../../../reducer/data/selectors";

class Film extends React.Component {
  componentDidMount() {
    const {changeCurrentFilter} = this.props;

    const {
      // eslint-disable-next-line react/prop-types
      currentDataItem,
      // eslint-disable-next-line react/prop-types
      currentDataFilter
      // eslint-disable-next-line react/prop-types
    } = this.props.location.state;

    changeCurrentFilter(currentDataFilter);

    this.setState({
      currentDataItem,
    });
  }

  render() {
    const {
      data,
      filters,
      currentFilter,
      changeCurrentFilter,
    } = this.props;

    return (
      <main className="page-content">
        <Catalog
          data={data}
          filters={filters}
          currentFilter={currentFilter}
          changeCurrentFilter={changeCurrentFilter}
          showPlayButton={true}
          catalogTitle={`More like this`}
          showCatalogTitle={true}
        />
        <Footer/>
      </main>
    );
  }
}

Film.propTypes = {
  data: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: getFilteredData(state).slice(0, 4),
    filters: getFilters(state),
    currentFilter: getCurrentFilter(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentFilter: (genre) => {
    dispatch(ActionCreators.changeActiveFilter(genre));
  },
});

export {Film};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
