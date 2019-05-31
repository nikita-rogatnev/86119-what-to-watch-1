import React from 'react';
import {render} from 'react-dom';

import App from './components/app/app.jsx';

import {createAPI} from './api';
import reducer from './reducer';
import {Operation} from './reducer/data/data';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

const initApp = () => {
  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window[`__REDUX_DEVTOOLS_EXTENSION__`] && window[`__REDUX_DEVTOOLS_EXTENSION__`]()
      )
  );

  store.dispatch(Operation.loadData());

  render((
    <Provider store={store}>
      <App/>
    </Provider>
  ), document.getElementById(`root`));
};

initApp();
