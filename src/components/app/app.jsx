import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card';
import Catalog from '../catalog/catalog';
import PageFooter from '../page-footer/page-footer';

import {
  actionGetFilters,
  actionGetCurrentFilter,
  actionChangeCurrentFilter,
  actionFilterData
} from '../../reducer/data/data';

import {getFilteredData} from '../../reducer/data/selectors';

class App extends PureComponent {
  render() {
    const {
      data,
      filters,
      currentFilter,
      changeCurrentFilter
    } = this.props;

    console.log(data);

    return (
      <React.Fragment>
        <MovieCard/>
        <div className="page-content">
          <Catalog
            data={data}
            filters={filters}
            currentFilter={currentFilter}
            changeCurrentFilter={changeCurrentFilter}
          />
          <PageFooter/>
        </div>
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

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  data: getFilteredData(state),
  filters: actionGetFilters(state),
  currentFilter: actionGetCurrentFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentFilter: (newFilter) => {
    dispatch(actionChangeCurrentFilter(newFilter));
    dispatch(actionFilterData(newFilter));
  }
});

export {App};

export default connect(mapStateToProps,)(App);
