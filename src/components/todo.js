var React = require('react');

var Todo = React.createClass({
  toggleTodo: function () {
    this.props.onToggleTodo(this.props.todo.id);
  },
  render: function () {
    return (
      <li style={{color: this.props.todo.isFinished ? 'red' : '#000'}} onClick={this.toggleTodo}>{this.props.todo.text}</li>
    );
  }
});

module.exports = Todo;
