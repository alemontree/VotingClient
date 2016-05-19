"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router, Route, hashHistory } 
      from 'react-router';
import { createStore } from 'redux';
import reducer from './reducer';
import { setState } from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import { VotingContainer } from "./components/Voting";
import { ResultsContainer } from './components/Results';

const PORT = 8090;


const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: { Sunshine: 2}
    }
  }
});

const socket = 
  io(`${location.protocol}//${location.hostname}:${PORT}`);
socket.on('state', state => 
  store.dispatch(setState(state))
);

const routes = <Route component={App}>
  <Route path="/results" component={ResultsContainer} />
  <Route path="/" component={VotingContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
