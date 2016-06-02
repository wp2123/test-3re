var todo = function (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      var todo = {
        id: action.id,
        text: action.text,
        isFinished: false
      };
      return todo;
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return _.assign({}, state, {
        isFinished: !state.isFinished
      });
    default:
      return state;
  }
};

module.exports = todo;
