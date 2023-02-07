import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

import App from './App';
import './index.css';

// Extension React Dev Tools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Enhancer Custom
// const enhancers = composeEnhancers(applyMiddleware(thunk));

// Création du store avec tous les reducers + enhancer custom
// const store = createStore(reducers, enhancers);

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
