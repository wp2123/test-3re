var React = require('react');

var Todo = React.createClass({
  render: function () {
    return (
      <li>{this.props.todo.text}</li>
    );
  }
});

module.exports = Todo;
