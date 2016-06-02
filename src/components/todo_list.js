var React = require('react');
var Todo = require('./todo');

var TodoList = React.createClass({
  render: function () {
    var todos = this.props.todos.map(function (todo) {
      return (
        <Todo key={todo.id} todo={todo} />
      );
    });
    return (
      <ul>{todos}</ul>
    );
  }
});

module.exports = TodoList;
