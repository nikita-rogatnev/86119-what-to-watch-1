import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import Header from '../header/header';
import SignIn from '../sign-in/sign-in';
import CardHuge from '../card-huge/card-huge';
import CardHero from '../card-hero/card-hero';
import Catalog from '../catalog/catalog';
import Favorites from '../favorites/favorites';
import Footer from '../footer/footer';

import {ActionCreators} from '../../reducer/data/data.js';
import {getFilters, getCurrentFilter, getFilteredData} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors';

import withPrivateRoute from '../../hocs/with-private-route/with-private-route';

const PrivateRoute = withPrivateRoute(Route);

class App extends PureComponent {
  render() {
    const {
      data,
      filters,
      currentFilter,
      changeCurrentFilter,
    } = this.props;

    return (
      <Switch>
        <Route path="/" exact render={() => (
          <React.Fragment>
            <CardHuge/>
            <main className="page-content">
              <Catalog
                data={data}
                filters={filters}
                currentFilter={currentFilter}
                changeCurrentFilter={changeCurrentFilter}
                showMoreButton={true}
              />
              <Footer/>
            </main>
          </React.Fragment>
        )}/>
        <Route path="/login" render={() => (
          <div className="user-page">
            <Header/>
            <SignIn/>
            <Footer/>
          </div>
        )}/>
        <Route path="/films/:id" render={() => (
          <React.Fragment>
            <CardHero {...this.props}/>
            <main className="page-content">
              <Catalog
                data={data}
                filters={[]}
                currentFilter={currentFilter}
                changeCurrentFilter={changeCurrentFilter}
                showMoreButton={false}
              />
              <Footer/>
            </main>
          </React.Fragment>
        )}/>
        <PrivateRoute path="/mylist" component={Favorites}/>
      </Switch>
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
