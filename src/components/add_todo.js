var React = require('react');
var ReactRedux = require('react-redux');
var actions = require('../actions');
var Link = require('react-router').Link;

var AddTodo = React.createClass({
  getInitialState: function () {
    return {
      text: ''
    };
  },
  handleTextChange: function (event) {
    var text = event.target.value;
    this.setState({
      text: text
    });
  },
  addTodo: function () {
    this.props.addTodo(this.state.text);
    this.props.router.push('/');
  },
  render: function () {
    return (
      <div>
        <Link to="/">返回</Link>
        <input value={this.state.text} onChange={this.handleTextChange}/>
        <button onClick={this.addTodo}>添加</button>
      </div>
    );
  }
});

var mapDispatchToProps = function (dispatch) {
  return {
    addTodo: function (text) {
      dispatch(actions.addTodo(text));
    }
  };
};

module.exports = ReactRedux.connect(function () {return {};}, mapDispatchToProps)(AddTodo);
