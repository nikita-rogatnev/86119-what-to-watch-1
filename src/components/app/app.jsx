import React, {PureComponent} from 'react';

import MovieCard from '../movie-card/movie-card';
import Catalog from "../catalog/catalog";
import PageFooter from "../page-footer/page-footer";

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <MovieCard/>
        <div className="page-content">
          <Catalog/>
          <PageFooter/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
