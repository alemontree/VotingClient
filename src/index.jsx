"use strict"
import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

console.log('I am alive');

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('app')
);
