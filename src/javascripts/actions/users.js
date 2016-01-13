import fetcher from '../fetcher';
import { ROOT, API_ROOT, postFormData } from '../api/api';

export const POST_OAUTH_TOKEN_REQUEST = 'POST_OAUTH_TOKEN_REQUEST';
export const POST_OAUTH_TOKEN_SUCCESS = 'POST_OAUTH_TOKEN_SUCCESS';
export const POST_OAUTH_TOKEN_FAILURE = 'POST_OAUTH_TOKEN_FAILURE';
export const POST_USER_REQUEST = 'POST_USER_REQUEST';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_FAILURE = 'POST_USER_FAILURE';

function postOauthTokenRequest() {
  return {
    type: POST_OAUTH_TOKEN_REQUEST
  }
}

function postOauthTokenSuccess(body) {
  return {
    type: POST_OAUTH_TOKEN_SUCCESS,
    body
  }
}

function postOauthTokenFailure(ex) {
  return {
    type: POST_OAUTH_TOKEN_FAILURE,
    ex
  }
}

export function postOauthToken(data) {
  return dispatch => {
    dispatch(postOauthTokenRequest());
    return fetcher.post(`${API_ROOT}/oauth/token`, data)
      .then(json => dispatch(postOauthTokenSuccess(json.body)))
      .catch(ex => dispatch(postOauthTokenFailure(ex)));
  };
}

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
    return postFormData(data, `${API_ROOT}/users`)
      .done(response => {
        if (response.hasOwnProperty('error')) {
          throw new Error(response['error']);
        }
        dispatch(postUserSuccess(response));
      })
      .fail(ex => dispatch(postUserFailure(ex)));
  }
}
