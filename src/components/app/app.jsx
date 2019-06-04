import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

import SignIn from '../sign-in/sign-in';
import CardHuge from '../card-huge/card-huge';
import CardHero from '../card-hero/card-hero';
import Catalog from '../catalog/catalog';
import AddReview from '../add-review/add-review';
import Favorites from '../favorites/favorites';
import Header from '../header/header';
import Footer from '../footer/footer';
import NotFound from '../not-found/not-found';

import {ActionCreators} from '../../reducer/data/data.js';
import {getFilters, getCurrentFilter, getFilteredData, getDataFavorite} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors';

import withPrivateRoute from '../../hocs/with-private-route/with-private-route';

const PrivateRoute = withPrivateRoute(Route);

class App extends PureComponent {
  render() {
    const {
      data,
      dataFavorite,
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
                showPlayButton={false}
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
                showPlayButton={true}
              />
              <Footer/>
            </main>
          </React.Fragment>
        )}/>

        <PrivateRoute path="/films/:id/review" exact render={() => (
          <React.Fragment>
            <CardHero {...this.props}/>
            <AddReview/>
          </React.Fragment>
        )}/>

        <PrivateRoute path="/mylist" exact render={() => (
          <React.Fragment>
            <Header/>
            <Favorites data={dataFavorite}/>
            <Footer/>
          </React.Fragment>
        )}/>
        <Route component={NotFound}/>
      </Switch>
    );
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  dataFavorite: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  changeCurrentFilter: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    data: getFilteredData(state),
    dataFavorite: getDataFavorite(state),
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
