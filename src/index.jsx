import React from "react";
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import films from './mocks/films';
import genres from './mocks/genres';

const appContainer = document.querySelector(`#root`);

ReactDOM.render(<App films={films} genres={genres}/>, appContainer);
