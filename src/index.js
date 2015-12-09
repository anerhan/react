// npm init
// npm install webpack express --save
// npm install react react-dom react-router history@1.13.1 --save

// npm install babel-core babel-loader babel-preset-es2015 babel-preset-react  --save
// npm install babel-cli react-hot-loader webpack-dev-middleware webpack-hot-middleware --save-dev

// load webpack
// ./node_modules/webpack/bin/webpack.js --config ./webpack.dev.config.js
// ./node_modules/babel-cli/bin/babel-node.js ./src/server.dev.js
import React from 'react';
import { render } from 'react-dom';

import  {Router, Route, IndexRoute } from 'react-router';

import createHistory from 'history/lib/createBrowserHistory';

import App     from './components/App';
import About   from './components/About';
import Welcome from './components/Welcome';

const history = createHistory('/');

const routes = (
  <Route path='/'            component={App}>
    <IndexRoute              component={Welcome}/>
    <Route      path='about' component={About}/>
  </Route>
);

// render(<Welcome />, document.getElementById('app'));
// render(<Goodbye />, document.getElementById('app2'));


render(
  <Router hisory={history}>{routes}</Router>,
  document.getElementById('app')
);
