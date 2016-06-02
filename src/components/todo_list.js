var React = require('react');
var Todo = require('./todo');

var TodoList = React.createClass({
  toggleTodo: function (id) {
    this.props.onToggleTodo(id);
  },
  render: function () {
    var todos = this.props.todos.map(function (todo) {
      return (
        <Todo key={todo.id} todo={todo} onToggleTodo={this.toggleTodo} />
      );
    }.bind(this));
    return (
      <ul>{todos}</ul>
    );
  }
});

module.exports = TodoList;
