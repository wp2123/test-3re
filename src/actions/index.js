var addTodo = require('./add_todo');
var setVisibilityFilter = require('./set_visibility_filter');
var toggleTodo = require('./toggle_todo');

var actions = {
  addTodo: addTodo,
  setVisibility: setVisibilityFilter,
  toggleTodo: toggleTodo
};

module.exports = actions;
