import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

const Greeting = () => {
  return <div>Hey there 1!</div>;
};

const Greeting2 = () => {
  return <div>Hey there 2!</div>;
};

const Greeting3 = () => {
  return <div>Hey there 3!</div>;
};

export default (
  <Route path="/" component={App}>
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting2} />
    <Route path="greet3" component={Greeting3} />
  </Route>
);