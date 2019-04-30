import React from 'react';
import MovieCard from '../movie-card/movie-card.jsx';
import PageContent from '../page-content/page-content.jsx';

const App = () => {
  return (
    <React.Fragment>
      <MovieCard/>
      <PageContent/>
    </React.Fragment>
  );
};

export default App;
