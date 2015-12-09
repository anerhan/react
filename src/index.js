// npm init
// npm install webpack express --save
// npm install react react-dom --save
// npm install babel-core babel-loader babel-preset-es2015 babel-preset-react  --save
// npm install babel-cli react-hot-loader webpack-dev-middleware webpack-hot-middleware --save-dev

// load webpack
// ./node_modules/webpack/bin/webpack.js --config ./webpack.dev.config.js
// ./node_modules/babel-cli/bin/babel-node.js ./src/server.dev.js
import React from 'react';
import { render } from 'react-dom';
import About from './components/About';
import Welcome from './components/Welcome';


render(<Welcome />, document.getElementById('app'));

render(<Goodbye />, document.getElementById('app2'));
