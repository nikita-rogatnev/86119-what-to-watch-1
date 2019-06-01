import React from 'react';
import {render} from 'react-dom';

import App from './components/app/app.jsx';

import {createAPI} from './api';
import reducer from './reducer';
import {Operations} from './reducer/data/data.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

const initApp = () => {
  const api = createAPI();

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window[`__REDUX_DEVTOOLS_EXTENSION__`] &&
          window[`__REDUX_DEVTOOLS_EXTENSION__`]()
      )
  );

  store.dispatch(Operations.loadData());

  render((
    <Provider store={store}>
      <App/>
    </Provider>
  ), document.getElementById(`root`));
};

initApp();
