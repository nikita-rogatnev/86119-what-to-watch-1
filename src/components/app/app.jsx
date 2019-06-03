import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../header/header';
import SignIn from '../sign-in/sign-in';
import CardHuge from '../card-huge/card-huge';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

import {ActionCreators} from '../../reducer/data/data.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors';

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
      changeCurrentFilter,
      isAuthorizationRequired,
    } = this.props;

    if (isAuthorizationRequired) {
      return (
        <div className="user-page">
          <Header/>
          <SignIn/>
          <Footer/>
        </div>
      );
    }

    return (
      <React.Fragment>
        <CardHuge/>
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
  isAuthorizationRequired: PropTypes.bool.isRequired
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
    dispatch(ActionCreators.changeActiveGenre(genre));
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
