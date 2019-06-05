import React from "react";
import PropTypes from "prop-types";

import CardHuge from "../../card-huge/card-huge";
import Catalog from "../../catalog/catalog";
import Footer from "../../footer/footer";

import {connect} from "react-redux";
import {ActionCreators} from "../../../reducer/data/data.js";
import {getFilters, getCurrentFilter, getFilteredData} from "../../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../../reducer/user/selectors";

class Home extends React.PureComponent {
  render() {
    const {
      data,
      filters,
      currentFilter,
      changeCurrentFilter,
    } = this.props;

    return (
      <React.Fragment>
        <CardHuge/>
        <main className="page-content">
          <Catalog
            data={data}
            filters={filters}
            currentFilter={currentFilter}
            changeCurrentFilter={changeCurrentFilter}
            showFilters={true}
            showMoreButton={true}
          />
          <Footer/>
        </main>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  data: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: getFilteredData(state),
    filters: getFilters(state),
    currentFilter: getCurrentFilter(state),
    isAuthorizationRequired: getAuthorizationStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentFilter: (genre) => {
    dispatch(ActionCreators.changeActiveFilter(genre));
  },
});

export {Home};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
