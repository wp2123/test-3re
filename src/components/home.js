var React = require('react');
var VisibleTodoList = require('./visible_todo_list');
var Link = require('react-router').Link;

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <Link to="/todos/new">添加</Link>
        <VisibleTodoList />
      </div>
    );
  }
});

module.exports = Home;
