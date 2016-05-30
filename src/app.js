console.log('hello, test app');

var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello, test 3re!</h1>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

ReactDom.render(routes, document.getElementById('container'));
