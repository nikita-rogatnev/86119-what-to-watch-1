import React from "react";
import PropTypes from "prop-types";

import CardHero from "../../card-hero/card-hero";
import Catalog from "../../catalog/catalog";
import Footer from "../../footer/footer";

import {connect} from "react-redux";
import {Operations, ActionCreators} from "../../../reducer/data/data";
import {
  getDataPromo,
  getFilters,
  getFilterCurrent,
  getFilteredData,
} from "../../../reducer/data/selectors";
import {getAuthorizationStatus, getLoggedStatus} from "../../../reducer/user/selectors";

class Home extends React.PureComponent {
  componentWillMount() {
    const {loadDataPromo} = this.props;

    loadDataPromo();
  }

  render() {
    const {
      data,
      dataPromo,
      filters,
      currentFilter,
      changeCurrentFilter,
    } = this.props;

    return (
      <React.Fragment>
        <CardHero
          data={dataPromo}
        />

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
  dataPromo: PropTypes.object.isRequired,
  loadDataPromo: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: getFilteredData(state),
    dataPromo: getDataPromo(state),
    filters: getFilters(state),
    currentFilter: getFilterCurrent(state),
    isAuthorizationRequired: getAuthorizationStatus(state),
    isLogged: getLoggedStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadDataPromo: () => {
    dispatch(Operations.loadDataPromo());
  },
  changeCurrentFilter: (genre) => {
    dispatch(ActionCreators.changeCurrentFilter(genre));
  },
});

export {Home};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
