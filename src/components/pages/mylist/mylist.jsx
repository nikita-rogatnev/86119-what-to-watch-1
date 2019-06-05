import React from "react";
import PropTypes from "prop-types";

import Header from "../../header/header";
import Catalog from "../../catalog/catalog";
import Footer from "../../footer/footer";

import {connect} from "react-redux";
import {ActionCreators} from "../../../reducer/data/data.js";
import {getFilterCurrent, getFilters, getDataFavorites} from "../../../reducer/data/selectors";

class Mylist extends React.PureComponent {
  render() {
    const {
      dataFavorites,
      filters,
      changeCurrentFilter,
    } = this.props;

    return (
      <div className="user-page">
        <Header/>
        <Catalog
          data={dataFavorites}
          filters={filters}
          currentFilter={`All genres`}
          changeCurrentFilter={changeCurrentFilter}
          maxCardsNumber={9999}
          showCatalogTitle={false}
          showPlayButton={true}
        />
        <Footer/>
      </div>
    );
  }
}

Mylist.propTypes = {
  dataFavorites: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    dataFavorites: getDataFavorites(state),
    filters: getFilters(state),
    currentFilter: getFilterCurrent(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentFilter: (genre) => {
    dispatch(ActionCreators.changeCurrentFilter(genre));
  },
});

export {Mylist};

export default connect(mapStateToProps, mapDispatchToProps)(Mylist);
