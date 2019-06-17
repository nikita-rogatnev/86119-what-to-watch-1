import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Film from "../pages/film/film";
import Review from "../pages/review/review";
import Mylist from "../pages/mylist/mylist";
import Error from "../pages/error/error";

import Player from "../video-player/video-player";

import withPrivateRoute from "../../hocs/with-private-route/with-private-route";

const PrivateRoute = withPrivateRoute(Route);

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/films/:id" component={Film}/>
        <Route path="/player" component={Player}/>
        <PrivateRoute path="/films/:id/review" exact component={Review}/>
        <PrivateRoute path="/mylist" exact component={Mylist}/>
        <Route component={Error}/>
      </Switch>
    );
  }
}

export default App;
