import React from "react";
import PropTypes from "prop-types";

import CardHero from "../../card-hero/card-hero";
import Catalog from "../../catalog/catalog";
import Footer from "../../footer/footer";

import {connect} from "react-redux";

import {Operations, ActionCreators} from "../../../reducer/data/data";
import {
  getDataFavorites,
  getFilters,
  getFilterCurrent,
  getFilteredData,
} from "../../../reducer/data/selectors";
import {getAuthorizationStatus, getLoggedStatus} from "../../../reducer/user/selectors";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomDataItem: {},
      randomDataFavoriteItem: {},
    };
  }

  componentDidMount() {
    const {
      data,
      dataFavorites,
    } = this.props;

    this.setState({
      randomDataItem: [...data][Math.floor(Math.random() * data.length)],
      randomDataFavoriteItem: [...dataFavorites][Math.floor(Math.random() * dataFavorites.length)],
    });
  }

  render() {
    const {
      data,
      dataFavorites,
      filters,
      currentFilter,
      changeCurrentFilter,
      isLogged,
    } = this.props;


    console.log(this.state);

    return (
      <React.Fragment>
        {isLogged && dataFavorites ?
          <React.Fragment>
            <CardHero
              data={this.state.randomDataFavoriteItem}
            />
          </React.Fragment>
          :
          <React.Fragment>
            <CardHero
              data={this.state.randomDataItem}
            />
          </React.Fragment>
        }

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
  dataFavorites: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
  loadDataFavorites: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: getFilteredData(state),
    dataFavorites: getDataFavorites(state),
    filters: getFilters(state),
    currentFilter: getFilterCurrent(state),
    isAuthorizationRequired: getAuthorizationStatus(state),
    isLogged: getLoggedStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadDataFavorites: () => {
    dispatch(Operations.loadDataFavorites());
  },
  changeCurrentFilter: (genre) => {
    dispatch(ActionCreators.changeCurrentFilter(genre));
  },
});

export {Home};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
