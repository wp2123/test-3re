var addTodo = function (text) {
  return {
    type: 'ADD_TODO',
    id: Date.now(),
    text
  };
};

module.exports = addTodo;
