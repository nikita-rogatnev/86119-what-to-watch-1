import React from 'react';
import PropTypes from "prop-types";

import Catalog from "../catalog/catalog";
import Footer from "../footer/footer";

import {connect} from 'react-redux';
import {ActionCreators} from '../../reducer/data/data.js';
import {getFilters, getCurrentFilter, getFilteredData, getDataFavorite} from '../../reducer/data/selectors.js';

class PageFilm extends React.Component {
  render() {
    const {
      data,
      currentFilter,
      changeCurrentFilter,
    } = this.props;

    return (
      <React.Fragment>
        <main className="page-content">
          <Catalog
            data={data}
            filters={[]}
            currentFilter={currentFilter}
            changeCurrentFilter={changeCurrentFilter}
            showMoreButton={false}
            showPlayButton={true}
          />
          <Footer/>
        </main>
      </React.Fragment>
    );
  }
}

PageFilm.propTypes = {
  data: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: getFilteredData(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentFilter: (genre) => {
    dispatch(ActionCreators.changeActiveGenre(genre));
  },
});

export {PageFilm};

export default connect(mapStateToProps, mapDispatchToProps)(PageFilm);
