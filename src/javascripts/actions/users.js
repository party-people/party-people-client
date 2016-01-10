import fetcher from '../fetcher';
import { API_ROOT } from '../api/api';

export const POST_USER_REQUEST = 'POST_USER_REQUEST';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_FAILURE = 'POST_USER_FAILURE';

function postUserRequest() {
  return {
    type: POST_USER_REQUEST
  };
}

function postUserSuccess(body) {
  return {
    type: POST_USER_SUCCESS
  };
}

function postUserFailure(ex) {
  return {
    type: POST_USER_FAILURE,
    ex
  };
}

export function postUser(data) {
  return dispatch => {
    dispatch(postUserRequest());
    return fetcher.post(`${API_ROOT}/users`, data)
      .then(json => {
        const body = json.body;
        if (body.hasOwnProperty('error')) {
          throw new Error(body['error']);
        }
        dispatch(postUserSuccess(body));
      })
      .catch(ex => dispatch(postUserFailure(ex)));
  }
}
