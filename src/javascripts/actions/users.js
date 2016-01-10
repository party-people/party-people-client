import fecther from '../fetcher';

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
    return fetcher.post('http://localhost:9000/api/v1/users', data)
      .then(json => dispatch(postUserSuccess(json.body)))
      .catch(ex => dispatch(postUserFailure(ex)));
  }
}
