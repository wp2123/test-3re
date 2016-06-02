var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var Wrapper = require('./components/wrapper');

var routes = (
  <Route path="/" component={Wrapper}></Route>
);

var router = (
  <Router history={browserHistory} routes={routes} />
);

module.exports = router;
