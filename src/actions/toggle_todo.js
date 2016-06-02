var toggleTodo = function (id) {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

module.exports = toggleTodo;
