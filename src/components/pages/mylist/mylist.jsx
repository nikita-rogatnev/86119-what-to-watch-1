import React from "react";
import PropTypes from "prop-types";
import {dataItemShape} from "../../../models";

import Header from "../../header/header";
import Heading from "../../heading/heading";
import Catalog from "../../catalog/catalog";
import Footer from "../../footer/footer";

import {connect} from "react-redux";
import {Operations, ActionCreators} from "../../../reducer/data/data";
import {getFilterCurrent, getFilters, getDataFavorites} from "../../../reducer/data/selectors";

class Mylist extends React.PureComponent {
  componentWillMount() {
    const {loadDataFavorites} = this.props;

    loadDataFavorites();
  }

  render() {
    const {
      dataFavorites,
      filters,
      changeCurrentFilter,
    } = this.props;

    return (
      <div className="user-page">
        <Header title={`My list`}/>

        {dataFavorites.length ?
          <Catalog
            data={dataFavorites}
            filters={filters}
            currentFilter={`All genres`}
            changeCurrentFilter={changeCurrentFilter}
            maxCardsNumber={9999}
            showCatalogTitle={false}
            showPlayButton={true}
          />
          :
          <Heading title={`No data`} isSimplified={true}/>}
        <Footer/>
      </div>
    );
  }
}

Mylist.propTypes = {
  dataFavorites: PropTypes.arrayOf(dataItemShape),
  loadDataFavorites: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string),
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
  loadDataFavorites: () => {
    dispatch(Operations.loadDataFavorites());
  },
  changeCurrentFilter: (genre) => {
    dispatch(ActionCreators.changeCurrentFilter(genre));
  },
});

export {Mylist};

export default connect(mapStateToProps, mapDispatchToProps)(Mylist);
