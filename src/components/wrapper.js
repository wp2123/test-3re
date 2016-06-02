var React = require('react');
var VisibleTodoList = require('./visible_todo_list');

var Wrapper = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello, test 3re!</h1>
        {this.props.children}
        <VisibleTodoList />
      </div>
    );
  }
});

module.exports = Wrapper;
