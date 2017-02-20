import React from 'react';
import App from './../App';
import HighlightList from './../components/HighlightList';
import { Route } from 'react-router';

module.exports = (
  <Route path="/" component={App}>
    <Route path="/books/:bookId" component={HighlightList} />
  </Route>
);
