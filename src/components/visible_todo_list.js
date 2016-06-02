var React = require('react');
var ReactRedux = require('react-redux');
var SetFilter = require('./set_filter');
var AddTodo = require('./add_todo');
var TodoList = require('./todo_list');
var _ = require('lodash');
var actions = require('../actions');

var VisibleTodoList = React.createClass({
  setVisibility: function (filter) {
    this.props.setVisibility(filter);
  },
  addTodo: function (text) {
    this.props.addTodo(text);
  },
  toggleTodo: function (id) {
    this.props.toggleTodo(id);
  },
  render: function () {
    var todos = [];
    this.props.todos.forEach(function (todo) {
      if (this.props.visibility === 'all') {
        todos.push(todo);
        return true;
      }
      if (this.props.visibility === 'finished' && todo.isFinished === true) {
        todos.push(todo);
        return true;
      }
      if (this.props.visibility === 'unfinished' && todo.isFinished === false) {
        todos.push(todo);
        return true;
      }
    }.bind(this));
    return (
      <div>
        <SetFilter onSetFilter={this.setVisibility} />
        <AddTodo onAddTodo={this.addTodo} />
        <TodoList todos={todos} onToggleTodo={this.toggleTodo} />
      </div>
    );
  }
});

var mapStateToProps = function (state) {
  return {
    todos: state.todos,
    visibility: state.visibilityFilter
  };
};

var mapDispatchToProps = function (dispatch) {
  return {
    addTodo: function (text) {
      dispatch(actions.addTodo(text));
    },
    setVisibility: function (filter) {
      dispatch(actions.setVisibility(filter));
    },
    toggleTodo: function (id) {
      dispatch(actions.toggleTodo(id));
    }
  };
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);
