import React from 'react';
import {Switch, Route} from 'react-router-dom';

import PageHome from '../pages/page-home';
import PageLogin from '../pages/page-login';
import PageFilm from '../pages/page-film';
import PageReview from '../pages/page-review';
import PageMyList from '../pages/page-mylist';
import PageError from '../pages/page-error';

import withPrivateRoute from '../../hocs/with-private-route/with-private-route';

const PrivateRoute = withPrivateRoute(Route);

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={PageHome}/>
        <Route path="/login" component={PageLogin}/>
        <Route path="/films/:id" component={PageFilm}/>
        <PrivateRoute path="/films/:id/review" exact component={PageReview}/>
        <PrivateRoute path="/mylist" exact component={PageMyList}/>
        <Route component={PageError}/>
      </Switch>
    );
  }
}

export default App;
