import React from "react";
import PropTypes from "prop-types";

import Header from "../../header/header";
import Catalog from "../../catalog/catalog";
import Footer from "../../footer/footer";

import {connect} from "react-redux";
import {ActionCreators} from "../../../reducer/data/data.js";
import {getFilterCurrent, getFilters, getFilteredData} from "../../../reducer/data/selectors";

class Mylist extends React.PureComponent {
  render() {
    const {
      data,
      filters,
      changeCurrentFilter,
    } = this.props;

    return (
      <div className="user-page">
        <Header/>
        <Catalog
          data={data}
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
  data: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: getFilteredData(state),
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
