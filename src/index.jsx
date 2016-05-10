"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router, Route, hashHistory } from 'react-router';
import Voting from './components/Voting';


const pair = ['Trainspotting', '28 Days Later'];

const routes = <Route component={App}>
  <Route path="/" component={Voting} />
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
