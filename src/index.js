import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, browserHistory } from 'react-router';
import routes from './modules/routes';

ReactDOM.render(
  <Router children={routes} history={browserHistory} />,
  document.getElementById('root'),
);
