const initialState = {
  articles:   {},
  categories: {},
  users:      {}
}

export default function entiries(state = initialState, action) {
  if (action.response && action.response.entities) {
    return Object.assign({}, state, action.response.entities);
  }
  return state;
}