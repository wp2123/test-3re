var React = require('react');

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
    this.props.onAddTodo(this.state.text);
    this.setState({
      text: ''
    });
  },
  render: function () {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleTextChange}/>
        <button onClick={this.addTodo}>添加</button>
      </div>
    );
  }
});

module.exports = AddTodo;
