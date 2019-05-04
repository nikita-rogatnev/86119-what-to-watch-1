import React from 'react';

import MovieCard from '../movie-card/movie-card';
import PageContent from '../page-content/page-content';

const App = () => {
  return (
    <React.Fragment>
      <MovieCard/>
      <PageContent/>
    </React.Fragment>
  );
};

export default App;
