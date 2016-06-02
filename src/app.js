var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var store = require('./reducers');
var router = require('./router');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('container')
);
