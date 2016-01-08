import {
  FETCH_TOP_REQUEST, FETCH_TOP_SUCCESS, FETCH_TOP_FAILURE
} from '../actions/top';

const initialState = {
  pickup:     [],
  articles:   [],
  categories: [],
  rankings:   []
}

export default function top(state = initialState, action) {
  switch(action.type) {
  case FETCH_TOP_SUCCESS:
    if (action.response && action.response.result) {
      return Object.assign({}, state, action.response.result)
    }
  }
  return state;
}
