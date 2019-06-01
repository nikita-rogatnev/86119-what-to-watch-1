import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../header/header';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

import {ActionCreators} from '../../reducer/data/data.js';

import {
  getFilters,
  getCurrentFilter,
  getFilteredData
} from '../../reducer/data/selectors.js';


class App extends PureComponent {
  render() {
    const {
      data,
      filters,
      currentFilter,
      changeCurrentFilter
    } = this.props;

    return (
      <React.Fragment>
        <Header/>
        <main className="page-content">
          <Catalog
            data={data}
            filters={filters}
            currentFilter={currentFilter}
            changeCurrentFilter={changeCurrentFilter}
          />
          <Footer/>
        </main>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    data: getFilteredData(state),
    filters: getFilters(state),
    currentFilter: getCurrentFilter(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentFilter: (genre) => {
    dispatch(ActionCreators.changeActiveGenre(genre));
    dispatch(ActionCreators.getFilteredData(genre));
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
