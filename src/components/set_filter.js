var React = require('react');

var SetFilter = React.createClass({
  showAll: function () {
    this.props.onSetFilter('all');
  },
  showFinished: function () {
    this.props.onSetFilter('finished');
  },
  showUnfinished: function () {
    this.props.onSetFilter('unfinished');
  },
  render: function () {
    return (
      <div>
        <button onClick={this.showAll}>查看全部</button>
        <button onClick={this.showFinished}>查看已完成</button>
        <button onClick={this.showUnfinished}>查看未完成</button>
      </div>
    );
  }
});

module.exports = SetFilter;
