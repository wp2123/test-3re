var Redux = require('redux');
var todos = require('./todos');
var visibilityFilter = require('./visibility_filter');

var todoApp = Redux.combineReducers({
  todos,
  visibilityFilter
});

var store = Redux.createStore(todoApp);

module.exports = store;
