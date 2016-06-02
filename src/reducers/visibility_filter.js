var DEFAULT_FILTER = 'all';

var visibilityFilter = function (state, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state || DEFAULT_FILTER;
  }
};

module.exports = visibilityFilter;
