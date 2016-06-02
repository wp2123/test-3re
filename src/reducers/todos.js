var todo = require('./todo');
var _ = require('lodash');

var DEFAULT_TODOS = [
  {id: 1, text: 'hello', isFinished: true},
  {id: 2, text: 'test', isFinished: false},
  {id: 3, text: '3re', isFinished: false}
];

var todos = function (state, action) {
  var newState = state ? _.assign([], state) : state;
  switch (action.type) {
    case 'ADD_TODO':
      newState.push(todo(undefined, action));
      return newState;
    case 'TOGGLE_TODO':
      return _.map(newState, function (todo) {
        return todo(todo, action);
      });
    default:
      return newState || DEFAULT_TODOS;
  }
};

module.exports = todos;
