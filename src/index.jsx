import React from "react";
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer';

const store = createStore(reducer);
const appContainer = document.querySelector(`#root`);

ReactDOM.render(<Provider store={store}><App/></Provider>, appContainer);
