var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;
var withRouter = ReactRouter.withRouter;
var Wrapper = withRouter(require('./components/wrapper'));
var AddTodo = withRouter(require('./components/add_todo.js'));
var Home = withRouter(require('./components/home'));

var routes = (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={Home} />
    <Route path="todos/new" component={AddTodo} />
  </Route>
);

var router = (
  <Router history={hashHistory} routes={routes} />
);

module.exports = router;
